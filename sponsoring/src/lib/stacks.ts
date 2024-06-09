import { StacksNetwork, StacksNetworkName } from '@stacks/network';
import { AuthType, StacksTransaction, deserializeTransaction, sponsorTransaction } from '@stacks/transactions';

export type Details = {
	error: string;
	tx: StacksTransaction;
	network: StacksNetwork;
	feesInNot: number;
};

const getNetwork = (networkName: StacksNetworkName) => {
	try {
		return StacksNetwork.fromName(networkName);
	} catch (e) {
		return undefined;
	}
};

const getFeesInNot = (feesInNot: number | string) => {
	if (typeof feesInNot === 'number') {
		return feesInNot;
	}
	try {
		return parseInt(feesInNot);
	} catch (e) {}
	return undefined;
};

export const extractDetails = async (requestBody: any): Promise<Partial<Details>> => {
	const network = getNetwork(requestBody.network);
	if (requestBody.txHex && network && requestBody.feesInNot) {
		const feesInNot = getFeesInNot(requestBody.feesInNot);
		try {
			const tx = deserializeTransaction(requestBody.txHex);
			return { tx, network, feesInNot };
		} catch (e) {
			return { error: 'Invalid txHex' };
		}
	}

	return { error: 'expected {txHex: string; network: StacksNetworkName }' };
};

export const isSponsorable = (tx: StacksTransaction) => {
	return tx.auth.authType === AuthType.Sponsored;
};

export const sponsorTx = async (tx: StacksTransaction, network: StacksNetwork, fee: number, sponsorNonce: number) => {
	return sponsorTransaction({
		sponsorPrivateKey: '',
		transaction: tx,
		network,
		fee,
		sponsorNonce,
	});
};
