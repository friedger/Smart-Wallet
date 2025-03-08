import React from 'react';
import DelegateStxPox4 from './extensions/delegate-stx-pox4';
import { Accordion, AccordionItem } from '@heroui/react';
import { PiLockKey } from 'react-icons/pi';

const Extensions = ({
  clientConfig,
  contractState,
  setConfirmationModal,
  setTx,
  smartWalletStx,
  smartWalletSBtc,
}) => {
  return (
    <div>
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={
            <label className="flex gap-4 items-center">
              <PiLockKey size="20px" className="text-warning" /> Delegate Stx
            </label>
          }
        >
          <DelegateStxPox4
            clientConfig={clientConfig}
            contractState={contractState}
            setConfirmationModal={setConfirmationModal}
            setTx={setTx}
            smartWalletStx={smartWalletStx}
	    smartWalletAddress={smartWalletAddress} 
          />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={
            <label className="flex gap-4 items-center">
              <PiLockKey size="20px" className="text-warning" /> Transfer sBTC (gas in sBTC)
            </label>
          }
        >
          <SBtcTransfer
            clientConfig={clientConfig}
            contractState={contractState}
            setConfirmationModal={setConfirmationModal}
            setTx={setTx}
            smartWalletSBtc={smartWalletSBtc}
            smartWalletAddress={smartWalletAddress} 
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Extensions;
