/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { broadcastTransaction, estimateTransactionFeeWithFallback } from '@stacks/transactions';
import { readRequestBody } from './lib/helpers';
import { extractDetails, isSponsorable, sponsorTx } from './lib/stacks';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		if (request.method === 'POST') {
			const reqBody = await readRequestBody(request);

			if (url.pathname === '/not') {
				// get tx from request
				const details = await extractDetails(reqBody);
				if (details.error) {
					return Response.json({
						error: details.error,
					});
				}
				const { tx, network, feesInNot } = details;
				if (!tx || !network) {
					return Response.json({
						error: 'invalid request',
					});
				}
				if (!isSponsorable(tx)) {
					return Response.json({
						error: 'not sponsorable',
					});
				}

				const feeEstimate = await estimateTransactionFeeWithFallback(tx, network);
				const sponsorNonce = 0; // TODO keep track of submitted txs
				const sponsoredTx = await sponsorTx(tx, network, Number(feeEstimate), sponsorNonce);
				const result = await broadcastTransaction(sponsoredTx);
				return Response.json({
					feeEstimate,
					result,
				});
			}
			return Response.json(
				{
					error: 'unsupported url. try /not',
				},
				{ status: 404 }
			);
		} else {
			return Response.json(
				{
					error: 'unsupported http method',
				},
				{ status: 404 }
			);
		}
	},
};
