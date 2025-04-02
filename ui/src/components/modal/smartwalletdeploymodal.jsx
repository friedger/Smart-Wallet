import React, { useEffect, useState } from "react";
import { openContractDeploy } from "@stacks/connect";
import { Alert, Button, Chip, Input, ModalBody, ModalHeader, Switch } from "@heroui/react";
import { GrDeploy } from "react-icons/gr";
import { IoClose, IoSaveOutline } from "react-icons/io5";
import BaseModal from "./basemodal";
import { isAuthed, userSession } from "../../user-session";
import { network } from "../../lib/constants";
import { getWalletContractInfo } from "../../services/wallet";
import { deleteFromGaia, getFromGaia, savetoGaia } from "../../services/storage";

function SmartWalletDeployModal({ clientConfig, show, close, setTx, setConfirmationModal, contractState }) {
    const authedUser = isAuthed ? userSession.loadUserData().profile.stxAddress[clientConfig?.chain] : '';
    const contractName = "smart-wallet";
    const [override, setOverRide] = useState(false);
    const [overrideContractAddress, setOverRideContractAddress] = useState('');
    const [errorMsg, setErrorMsg] = useState({ title: '', msg: '', color: '', state: false });

    async function checkMemPool() {
        console.log("Mempool check");
    }

    async function deployContract() {
        let clarityCode = await fetch("/smart-wallet.clar");
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
            onFinish: (res) => {
                setTx(res?.txId);
                setConfirmationModal(true);
                close();
            },
            onCancel: (res) => {
                console.log('transaction cancelled', { res });
            },
        });
    }

    async function configSmartWalletAddress() {
        const validateOverrideContractAddress = await getWalletContractInfo(overrideContractAddress, clientConfig);
        console.log({ overrideContractAddress, validateOverrideContractAddress });
        const { found } = validateOverrideContractAddress;
        if (!found) {
            setErrorMsg({
                title: 'NOT FOUND',
                msg: "The override smart contract address is not yet deployed!!!",
                color: 'warning',
                state: true
            });
            return;
        }

        const { success, error, code } = await savetoGaia({ fileName: 'config.json', content: { address: overrideContractAddress, found } });
        if (success) {
            window.location.reload();
        } else {
            setErrorMsg({
                title: code,
                msg: error,
                color: 'warning',
                state: true
            });
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            checkMemPool();
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <BaseModal baseModalsOpen={show} baseModalOnClose={close}>
            <ModalHeader className="flex flex-col gap-1">
                Welcome to Smart Wallet!
            </ModalHeader>
            <ModalBody>
                <div className="w-full justify-center items-center w-full space-y-4">
                    <Alert
                        hideIcon
                        className="text-justify"
                        color="secondary"
                        description="🚀 Smart Wallet is a secure 🔒 and intuitive solution for managing your digital assets. Effortlessly deploy your contract 📜 and take full control of your finances 💰 with a seamless and streamlined experience.                            "
                        title={<Chip color="danger" variant="faded">Note:</Chip>}
                        variant="flat"
                    />

                    <div className="w-100 flex flex-col gap-2">
                        <Switch value={override} onChange={() => setOverRide(!override)} size="sm">
                            Override
                        </Switch>
                        {override && <Input label="Smart Wallet Address" value={overrideContractAddress} onChange={(e) => setOverRideContractAddress(e.target.value)} />}
                        {errorMsg.state && <Alert className="flex justify-center items-center" title={errorMsg.title} color={errorMsg.color} description={errorMsg.msg} closeButton={true} />}
                    </div>

                    <div className="w-full flex justify-between gap-4">
                        <Button className="p-0" color="default" radius="full" onPress={close}>
                            <IoClose className="text-danger" />
                        </Button>
                        <Button isDisabled={contractState} className="p-0" color="warning" radius="full" onPress={override ? configSmartWalletAddress : deployContract}>
                            {override ? <IoSaveOutline /> : <GrDeploy />}
                        </Button>
                    </div>
                </div>
            </ModalBody>
        </BaseModal>
    );
}

export default SmartWalletDeployModal;