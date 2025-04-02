import React, { useEffect, useState } from 'react';
import BaseModal from './basemodal';
import { Alert, Button, Chip, Code, Input, ModalBody, ModalHeader } from '@heroui/react';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { openContractCall, openSTXTransfer } from '@stacks/connect';
import { bufferCVFromString, noneCV, optionalCVOf, Pc, PostConditionMode, principalCV, uintCV } from '@stacks/transactions';
import { userSession } from '../../user-session';
import { network } from '../../lib/constants';
import { umicrostoActualValue } from '../../lib/operator';

const StxSendModal = ({ show, close, stx, clientConfig, contractState, smartWalletAddress, setTx, setConfirmationModal }) => {
    const userAddress = userSession.loadUserData().profile.stxAddress[clientConfig?.chain];

    const [amount, setAmount] = useState(0);
    const [address, setAddress] = useState(userAddress);
    const [memo, setMemo] = useState('');
    const [isDiabled, setIsDisabled] = useState(false);


    function sendStx() {
        const txAmount = amount * 1000000;
        const postConditions = [Pc.principal(smartWalletAddress).willSendLte(txAmount).ustx()];
        const mem = memo ? optionalCVOf(bufferCVFromString(memo)) : noneCV();
        openContractCall({
            contractAddress: smartWalletAddress?.split('.')[0],
            contractName: smartWalletAddress?.split('.')[1],
            functionName: 'stx-transfer',
            functionArgs: [uintCV(txAmount), principalCV(address), mem],
            stxAddress: userAddress,
            postConditions,
            postConditionMode: PostConditionMode.Deny,
            network: network(clientConfig?.chain),
            onFinish: ({ txId }) => {
                setTx(txId);
                setConfirmationModal(true);
                close();
            }
        })
    }

    function formatNumber(num) {
        if (isNaN(num)) return 0.0;

        if (num >= 1e9) {
            return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "b"; // Billions
        }
        if (num >= 1e6) {
            return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "m"; // Millions
        }
        if (num >= 1e3) {
            return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "k"; // Thousands
        }
        return num;
    }

    useEffect(() => {
        const actualBalance = umicrostoActualValue(stx?.balance, 6);
        console.log(contractState && amount > 0 && actualBalance > amount, { actualBalance, contractState, amount });
        if (contractState && amount > 0 && actualBalance > amount) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [stx, amount])

    return (
        <BaseModal baseModalsOpen={show} baseModalOnClose={close}>
            <ModalHeader className="flex flex-col gap-1">Debit Smart Wallet</ModalHeader>
            <ModalBody className='p-5 gap-4'>
                <Alert
                    color="danger"
                    className='flex items-center text-justify'
                    description="STX 💰 will be transferred from your Smart Wallet 🤖  to any designated address 💼. Verify the transaction on Leathal Window 🔒."
                    title=""
                    variant="faded"
                />

                <Input label="Amount" placeholder="Enter amount" type="number" max={stx?.balance} value={amount} onChange={(e) => setAmount(e.target.value)} />

                <Input label="Address" placeholder="Enter address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

                <Input label="Memo" placeholder="Enter memo" type="text" maxLength={32} value={memo} onChange={(e) => setMemo(e.target.value)} />

                <div className='w-full flex flex-col gap-2'>

                    <Code className='w-full flex items-center gap-5'><Chip>Sender:</Chip> <small>{`${smartWalletAddress.slice(0, 4)}...${smartWalletAddress.slice(smartWalletAddress.length - 20, smartWalletAddress.length)}`}</small></Code>
                    <Code className='w-full flex items-center gap-5'><Chip>Receipient:</Chip> <small>{`${userAddress.slice(0, 4)}...${userAddress.slice(userAddress.length - 20, userAddress.length)}`}</small></Code>
                    <Code className='w-full flex items-center gap-5'><Chip>Amount:</Chip> {formatNumber(amount)}</Code>

                </div>

                <Button color="warning" variant="shadow" isDisabled={isDiabled} onPress={sendStx}>
                    <RiLuggageDepositFill color='white' />
                </Button>


            </ModalBody>
        </BaseModal>
    );
}

export default StxSendModal;