import { Button, Input } from '@heroui/react';
import { hexToBytes } from '@stacks/common';
import { openContractCall } from '@stacks/connect';
import {
  bufferCV,
  Pc,
  PostConditionMode,
  principalCV,
  serializeCV,
  tupleCV,
  uintCV,
} from '@stacks/transactions';
import React, { useState } from 'react';
import { PiArrowArcLeftThin } from 'react-icons/pi';
import { network } from '../../lib/constants';
import { contracts, EXTENSION_CALL_TOKEN_NAME } from '../../lib/contracts';
import { userSession } from '../../user-session';
import { submitToSponsor } from '../../lib/sponsoring';

const SBtcTransfer = ({
  clientConfig,
  setConfirmationModal,
  setTx,
  smartWalletSBtc,
  smartWalletAddress,
}) => {
  const [amount, setAmount] = useState();
  const [recipient, setRecipient] = useState('');
  const [fees, setFees] = useState(0);

  const userAddress = userSession.loadUserData().profile.stxAddress[clientConfig?.chain];

  function transferSBtc() {
    const transferAmount = Math.round(amount * 1_00_000_000);
    const feesAmount = Math.round(fees * 1_00_000_000);
    console.log({ transferAmount });
    const serializedPayload = hexToBytes(
      serializeCV(
        tupleCV({
          amount: uintCV(transferAmount),
          to: principalCV(recipient),
          fees: uintCV(feesAmount),
        })
      )
    );

    const [contractAddress, contractName] = smartWalletAddress.split('.');
    const sbtcTransferExtension = contracts.sbtcTransferExtension[clientConfig?.chain];
    const sbtcContract = contracts.sbtcContract[clientConfig?.chain];
    const sbtcTokenName = contracts.sbtcTokenName[clientConfig?.chain];
    const sponsored = feesAmount > 0;
    openContractCall({
      contractAddress,
      contractName,
      functionName: 'extension-call',
      functionArgs: [principalCV(sbtcTransferExtension), bufferCV(serializedPayload)],
      network: network(clientConfig?.chain),
      stxAddress: userAddress,
      sponsored,
      postConditionMode: PostConditionMode.Deny,
      postConditions: [
        Pc.principal(smartWalletAddress)
          .willSendEq(1)
          .ft(smartWalletAddress, EXTENSION_CALL_TOKEN_NAME),
        Pc.principal(smartWalletAddress)
          .willSendLte(transferAmount + feesAmount)
          .ft(sbtcContract, sbtcTokenName),
      ],
      onFinish: ({ txId, stacksTransaction }) => {
        console.log({ txId, stacksTransaction });
        if (sponsored) {
          const { txid } = submitToSponsor(stacksTransaction);
          setTx(txid);
          setConfirmationModal(true);
        } else {
          setTx(txId);
          setConfirmationModal(true);
        }
      },
      onCancel: () => {
        console.log('Transfer canceled!');
      },
    });
  }

  return (
    <div className="w-full flex flex-col space-y-4">
      <Input
        label="Amount to send"
        errorMessage={
          amount < 0.00000001
            ? `Minimum transfer amount is 0.00000001`
            : amount > smartWalletSBtc?.balance
            ? 'Insufficient funds!'
            : ''
        }
        name="amount"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <Input
        label="Transfer sBTC to Address"
        id="recipient-address"
        type="text"
        value={recipient}
        onChange={e => setRecipient(e.target.value)}
      />

      <Input
        label="Gas fees in sBTC"
        name="fees"
        type="text"
        value={fees}
        onChange={e => setFees(e.target.value)}
      />

      <Button isDisabled={!recipient || !amount} color="warning" onPress={transferSBtc}>
        <PiArrowArcLeftThin size="20px" className="text-white" />
        Transfer sBTC
      </Button>
    </div>
  );
};

export default SBtcTransfer;
