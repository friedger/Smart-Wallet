// test/index.spec.ts
import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src/index';
import {
	AnchorMode,
	StacksTransaction,
	TransactionVersion,
	createSingleSigSpendingCondition,
	createSponsoredAuth,
	makeUnsignedContractCall,
} from '@stacks/transactions';
import { bytesToHex } from '@stacks/common';

const IncomingRequest = Request<unknown, IncomingRequestCfProperties>;

describe('Sponsoring worker', () => {
	it('responds with sponsored transaction', async () => {
		const tx = await makeUnsignedContractCall({
			contractAddress: 'SP000000000000000000002Q6VF78',
			contractName: 'test',
			anchorMode: AnchorMode.Any,
			functionName: 'test',
			functionArgs: [],
			sponsored: true,
			numSignatures: 1,
			publicKey: '',
		});
		const txHex = bytesToHex(tx.serialize());
		const request = new IncomingRequest('/not', {
			body: JSON.stringify({
				txHex,
				network: 'testnet',
				feesInNot: 1000000,
			}),
			method: 'POST',
		});
		// Create an empty context to pass to `worker.fetch()`.
		const ctx = createExecutionContext();
		const response = await worker.fetch(request, env, ctx);
		// Wait for all `Promise`s passed to `ctx.waitUntil()` to settle before running test assertions
		await waitOnExecutionContext(ctx);
		expect(await response.text()).toMatchInlineSnapshot(`"Hello World!"`);
	});
});
