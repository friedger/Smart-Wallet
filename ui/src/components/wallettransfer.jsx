import { Accordion, AccordionItem, Button, Code, Input, Listbox, ListboxItem, Switch, Textarea } from '@heroui/react';
import { openContractCall } from '@stacks/connect';
import React, { useState } from 'react';
import { userSession } from '../user-session';
import { PostConditionMode, principalCV } from '@stacks/transactions';
import { network } from '../lib/constants';

const Wallettransfer = ({ clientConfig, contractState, setConfirmationModal, setTx, smartWalletAddress }) => {
    const [agree, setAgree] = useState(false);
    const [address, setAdress] = useState('');
    const [contractAddress, contractName] = smartWalletAddress.split('.');
    const userAddress = userSession.loadUserData().profile.stxAddress[clientConfig?.chain];

    function transferWalletOwnerShip() {
        openContractCall({
            contractAddress: contractAddress,
            contractName: contractName,
            functionName: 'transfer-wallet',
            functionArgs: [principalCV(address)],
            network: network(clientConfig?.chain),
            stxAddress: userAddress,
            postConditionMode: PostConditionMode.Deny,
            onFinish: ({ txId }) => {
                setTx(txId);
                setConfirmationModal(true);
            }
        })
    }

    return (
        <div className='w-full flex flex-col gap-5 items-center p-5'>

            <form className='w-full flex gap-5 flex-col' onSubmit={(e) => {
                e.preventDefault();
                transferWalletOwnerShip();
            }} >

                <Input label='Address' name='transfer-to-address' autoComplete="on" placeholder='Enter address' value={address} onChange={(e) => setAdress(e.target.value)} />
                <Button isDisabled={!(address && contractState)} color='warning' type='submit'>Transfer Wallet</Button>
            </form>

        </div>
    );
}

export default Wallettransfer;