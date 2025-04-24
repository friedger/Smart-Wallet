import axios from "axios";
import { userSession } from "../user-session";
import { bufferCV, cvToValue, fetchCallReadOnlyFunction, hexToCV, noneCV, Pc, PostConditionMode, principalCV, serializeCV, stringAsciiCV, tupleCV, uintCV } from "@stacks/transactions";
import { Buffer } from "buffer";
import { network } from "../lib/constants";
import { clientFromNetwork } from "@stacks/network";
import { getFromGaia } from "./storage";
import { openContractCall, openContractDeploy } from "@stacks/connect";

export async function getSmartWalletBalance(address, clientConfig) {
    const { data, status } = await axios.get(`${clientConfig?.api}/extended/v1/address/${address}/balances`);
    const { fungible_tokens, non_fungible_tokens, stx } = data;

    const fungibleTokens = Object.keys(fungible_tokens).map((key) => {
        return { contract_id: key, ...fungible_tokens[key], name: key.split('::')[1], contract_principal: key.split('::')[0] };
    });
    const nonFungibleTokens = await Promise.all(Object.keys(non_fungible_tokens).map(async (key) => {
        let asset = (await axios.get(`${clientConfig?.api}/extended/v1/tokens/nft/holdings?principal=${address}&asset_identifiers=${key}&offset=0&limit=50`)).data?.results;
        asset = asset?.map((values) => {
            const hexvals = hexToCV(values?.value?.hex);
            const buffValue = hexvals?.value?.name ? Buffer.from(hexvals?.value?.name?.value, "hex").toString() : values?.value?.repr.slice(1);
            return {
                ...values,
                name: values?.asset_identifier.split('::')[1],
                value: buffValue
            }
        })
        return asset;
    }));
    return { stx: { ...stx }, fungibleTokens, nonFungibleTokens: nonFungibleTokens.flat() };
}

export async function getUserBalance(clientConfig) {
    const userAddress = userSession?.loadUserData()?.profile?.stxAddress[clientConfig?.network];
    const { data, status } = await axios.get(`${clientConfig?.api}/extended/v1/address/${userAddress}/balances`);
    const { fungible_tokens, non_fungible_tokens, stx } = data;

    const fungibleTokens = Object.keys(fungible_tokens).map((key) => {
        return { contract_id: key, ...fungible_tokens[key], name: key.split('::')[1] };
    });
    const nonFungibleTokens = await Promise.all(Object.keys(non_fungible_tokens).map(async (key) => {
        let asset = (await axios.get(`${clientConfig?.api}/extended/v1/tokens/nft/holdings?principal=${userAddress}&asset_identifiers=${key}&offset=0&limit=50`)).data?.results;
        asset = asset?.map((values) => {
            const hexvals = hexToCV(values?.value?.hex);
            const buffValue = hexvals?.value?.name ? Buffer.from(hexvals?.value?.name?.value, "hex").toString() : values?.value?.repr.slice(1);
            return {
                ...values,
                name: values?.asset_identifier.split('::')[1],
                value: buffValue
            }
        })
        return asset;
    }));
    return { stx: { ...stx }, fungibleTokens, nonFungibleTokens: nonFungibleTokens.flat() };
}

export async function getConfig() {
    let result;
    const { success, fileContent } = await getFromGaia({ fileName: 'config.json' });
    if (success) {
        result = fileContent;
    }
    return result;
}

export async function getWalletContractInfo(address, clientConfig) {
    let result;

    try {

        const response = (await axios.get(`${clientConfig?.api}/extended/v2/smart-contracts/status?contract_id=${address}`)).data;
        const contractInfo = response[address];
        result = { found: contractInfo?.found && contractInfo?.result?.status === 'success', ...contractInfo?.result, address };

    } catch (error) {

        result = { found: false, error: error.message, code: error?.code, address };
        console.log({ error, result });

    }

    return result;
}

export async function getNftWallet(targetAssetAddress, assetId, clientConfig) {
    let result;
    try {
        const userAddress = userSession.loadUserData().profile.stxAddress[clientConfig?.chain];
        let metaUri = await fetchCallReadOnlyFunction({
            contractAddress: targetAssetAddress.split('.')[0],
            contractName: targetAssetAddress.split('::')[0].split('.')[1],
            functionName: 'get-token-uri',
            functionArgs: [uintCV(parseInt(assetId))],
            network: network(clientFromNetwork?.chain),
            senderAddress: userAddress
        });
        metaUri = cvToValue(metaUri)?.value?.value;
        const getmeta = (await axios.get(metaUri)).data;
        result = getmeta;
    } catch (error) {
        result = {
            attributes: [],
            description: error?.message,
            image: "nft-holder.png",
            name: error?.code,
            properties: {}
        }
    }


    return result;
}

export async function deployContract({ codePath, contractName, authedUser, setTx, setConfirmationModal, setErrorMsg, clientConfig }) {
    let result, clarityCode = await fetch(codePath);
    if (clarityCode.status !== 200) {
        setErrorMsg({
            title: 'Not Found',
            msg: "Failed to fetch contract code",
            color: 'warning',
            state: true
        });
        return;
    }
    clarityCode = (await clarityCode.text()).toString();

    openContractDeploy({
        contractName: contractName,
        codeBody: clarityCode,
        clarityVersion: 2,
        stxAddress: authedUser,
        network: network(clientConfig?.chain),
        onFinish: async (res) => {
            setTx(res?.txId);
            if (success) {
                setConfirmationModal(true);
                close();
            } else {
                setErrorMsg({
                    title: code,
                    msg: error,
                    color: 'warning',
                    state: true
                });
            }
        },
        onCancel: (res) => {
            console.log('transaction cancelled', { res });
        },
    });
}

export function delegate({ authAddress, amount, delegate_to_address, smartWalletAddress, delegationContract, setTx, setConfirmationModal, clientConfig }) {
    const delegateAmount = amount * 1000000;
    const serializedPayload = hexToUint8Array(serializeCV(
        tupleCV({
            "action": stringAsciiCV('delegate'),
            "amount-ustx": uintCV(delegateAmount),
            "delegate-to": principalCV(delegate_to_address),
            "until-burn-ht": noneCV(),
            "pox-addr": noneCV(),
        })
    ));

    const [contractAddress, contractName] = smartWalletAddress.split('.');
    openContractCall({
        contractAddress: contractAddress,
        contractName: contractName,
        functionName: 'extension-call',
        functionArgs: [
            principalCV(delegationContract),
            bufferCV(serializedPayload)
        ],
        network: network(clientConfig?.chain),
        stxAddress: authAddress,
        postConditionMode: PostConditionMode.Deny,
        postConditions: [
            Pc.principal(smartWalletAddress).willSendLte(delegateAmount).ustx()
        ],
        onFinish: ({ txId }) => {
            setTx(txId);
            setConfirmationModal(true);
        },
        onCancel: () => {
            console.log('Action canceled!!!');
        }
    })
}