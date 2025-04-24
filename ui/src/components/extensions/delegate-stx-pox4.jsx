import { Button, Input } from '@heroui/react';
import { openContractCall } from '@stacks/connect';
import {
  bufferCV,
  noneCV,
  Pc,
  PostConditionMode,
  principalCV,
  serializeCV,
  stringAsciiCV,
  tupleCV,
  uintCV,
} from '@stacks/transactions';
import React, { useState } from 'react';
import { PiLockKey } from 'react-icons/pi';
import { network } from '../../lib/constants';
import { contracts } from '../../lib/contracts';
import { userSession } from '../../user-session';
import { hexToBytes } from '@stacks/common';

const DelegateStxPox4 = ({
  clientConfig,
  contractState,
  setConfirmationModal,
  setTx,
  smartWalletStx,
  smartWalletAddress,
}) => {
  const [amount, setAmount] = useState(0.1);
  const [address, setAddress] = useState(smartWalletAddress);
  const [lockPeriod, setLockPeriod] = useState(1);

  const userAddress = userSession.loadUserData().profile.stxAddress[clientConfig?.chain];

  function delegate() {
    const delegateAmount = amount * 1000000;
    const serializedPayload = hexToBytes(
      serializeCV(
        tupleCV({
          action: stringAsciiCV('delegate'),
          'amount-ustx': uintCV(delegateAmount),
          'delegate-to': principalCV(address),
          'until-burn-ht': noneCV(),
          'pox-addr': noneCV(),
        })
      )
    );

    openContractCall({
      contractAddress: userAddress,
      contractName: contractName,
      functionName: 'extension-call',
      functionArgs: [
        principalCV(contracts.delegateExtension[clientConfig?.chain]),
        bufferCV(serializedPayload),
      ],
      network: network(clientConfig?.chain),
      stxAddress: userAddress,
      postConditionMode: PostConditionMode.Deny,
      postConditions: [Pc.principal(smartWalletAddress).willSendLte(delegateAmount).ustx()],
      onFinish: ({ txId }) => {
        setTx(txId);
        setConfirmationModal(true);
      },
      onCancel: () => {
        console.log('Action canceled!!!');
      },
    });
  }

  return (
    <div className="w-full flex flex-col space-y-4">
      <Input
        label="Lock Amount"
        errorMessage={
          amount < 1
            ? `Minimum lock-amount is 1!!!`
            : amount > smartWalletStx?.balance
            ? 'Insufficient funds!!!'
            : ''
        }
        min={1}
        name="lock-amount"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <Input
        label="Delegate to Address"
        id="delegate-to-address"
        type="text"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <Input
        errorMessage={
          lockPeriod < 1
            ? `Minimum lock-period is 1!!!`
            : lockPeriod > 12
            ? 'Max lock period is 12!!'
            : ''
        }
        label="Lock Period"
        name="lock-period"
        type="text"
        min={1}
        max={12}
        value={lockPeriod}
        onChange={e => setLockPeriod(e.target.value)}
      />

      <Button isDisabled={!contractState} color="warning" onPress={delegate}>
        <PiLockKey size="20px" className="text-white" />
      </Button>
    </div>
  );
};

export default DelegateStxPox4;
