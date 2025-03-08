import { StacksTransactionWire } from '@stacks/transactions';
import axios from 'axios';

export const submitToSponsor = async (stacksTransaction: StacksTransactionWire) => {
  const txRaw = stacksTransaction.serialize();
  const payload = { tx: txRaw, network: 'testnet', feesInTokens: 100 };

  const response = await axios.post(
    'http://localhost:8787/smart-wallet-sbtc/v1/sponsor',
    JSON.stringify(payload),
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
  console.log(response);
  return response.data;
};
