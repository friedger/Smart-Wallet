import { Alert, Button, Input } from '@heroui/react';
import { openContractCall } from '@stacks/connect';
import React, { useEffect, useState } from 'react';
import { PiLockKey } from "react-icons/pi";
import { network } from '../../lib/constants';
import { bufferCV, bufferCVFromString, deserializeCV, noneCV, Pc, PostConditionMode, principalCV, serializeCV, stringAsciiCV, tupleCV, uintCV } from '@stacks/transactions';
import { userSession } from '../../user-session';
import { bufferFromAscii, serialize, stringAscii } from '@stacks/transactions/dist/cl';
import { getWalletContractInfo, deployContract, delegate } from '../../services/wallet';

const DelegateStxPox4 = ({ clientConfig, contractState, setConfirmationModal, setTx, smartWalletStx, smartWalletAddress }) => {
    const [amount, setAmount] = useState(0.1);
    const [address, setAddress] = useState(smartWalletAddress);
    const [lockPeriod, setLockPeriod] = useState(1);

    const [loading, setLoading] = useState(true);

    const [delegateContract, setDelegateContract] = useState(false);
    const [errorMsg, setErrorMsg] = useState({ title: '', msg: '', color: '', state: false });


    const userAddress = userSession.loadUserData().profile.stxAddress[clientConfig?.chain];
    const [smartWalletOriginAddress, smartWalletName] = smartWalletAddress.split('.');
    const delegationContract = `${smartWalletOriginAddress}.ext-delegate-stx-pox-4`;

    function hexToUint8Array(hexString) {
        if (hexString.startsWith('0x')) {
            hexString = hexString.slice(2); // Remove "0x" prefix if present
        }
        const bytes = new Uint8Array(hexString.length / 2);
        for (let i = 0; i < bytes.length; i++) {
            bytes[i] = parseInt(hexString.substr(i * 2, 2), 16);
        }
        return bytes;
    }

    async function init() {
        const { found } = await getWalletContractInfo(delegationContract, clientConfig);
        setDelegateContract(found);
        setLoading(false);
    }

    useEffect(() => {
        init();
    }, [smartWalletAddress])

    return (
        <div className='w-full flex flex-col space-y-4'>

            {(delegateContract && !loading)
                ? <>

                    <Input label='Lock Amount' errorMessage={amount < 1 ? `Minimum lock-amount is 1!!!` : amount > smartWalletStx?.balance ? "Insufficient funds!!!" : ""} min={1} name="lock-amount" type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />

                    <Input label='Delegate to Address' name='delegate-to-address' autoComplete="on" id='delegate-to-address' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />

                    <Input errorMessage={lockPeriod < 1 ? `Minimum lock-period is 1!!!` : lockPeriod > 12 ? "Max lock period is 12!!" : ""} label='Lock Period' name='lock-period' type='text' min={1} max={12} value={lockPeriod} onChange={(e) => setLockPeriod(e.target.value)} />

                    <Button isDisabled={!contractState} color='warning'
                        onPress={() => delegate({
                            authAddress: userAddress,
                            amount,
                            delegate_to_address: address,
                            smartWalletAddress,
                            delegationContract,
                            setTx,
                            setConfirmationModal,
                            clientConfig
                        })}>
                        <PiLockKey size="20px" className='text-white' />
                    </Button>

                </>
                : <>
                    <Button isDisabled={!(smartWalletAddress && (smartWalletOriginAddress === userAddress))} color='warning'
                        onPress={() => deployContract({
                            codePath: '/ext-delegate-stx-pox-4.clar',
                            contractName: 'ext-delegate-stx-pox-4',
                            authedUser: userAddress,
                            setTx,
                            setConfirmationModal,
                            setErrorMsg,
                            clientConfig
                        })} className='flex items-center justify-center space-x-2 font-bold text-white'>
                        Deploy
                    </Button>

                    {errorMsg.state && <Alert className="flex justify-center items-center" title={errorMsg.title} color={errorMsg.color} description={errorMsg.msg} closeButton={true} />}

                </>
            }

        </div>
    );
}

export default DelegateStxPox4;
