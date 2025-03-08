import { showConnect } from '@stacks/connect';
import {
  STACKS_DEVNET,
  STACKS_MAINNET,
  STACKS_MOCKNET,
  STACKS_TESTNET,
  StacksNetworks,
} from '@stacks/network';
import { userSession } from '../user-session';

export function authenticate() {
  return showConnect({
    appDetails: {
      name: 'Smart Wallet',
      icon: 'https://smart-wallet-blond.vercel.app/logo512.png',
    },
    redirectTo: '/',
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

export function disconnect() {
  userSession.signUserOut('/');
}

export function isUserAuthed() {
  return userSession.isUserSignedIn();
}

export function getAddress(network) {
  const networkVal = {
    testnet: 'testnet',
    devnet: 'testnet',
    mainnet: 'mainnet',
    mocknet: 'mainnet',
  }[network];
  return isUserAuthed() ? userSession.loadUserData().profile.stxAddress[networkVal] : '';
}

export function getNetworks() {
  return StacksNetworks;
}

export function network(network) {
  return {
    mainnet: STACKS_MAINNET,
    testnet: STACKS_TESTNET,
    mocknet: STACKS_MOCKNET,
    devnet: STACKS_DEVNET,
  }[network];
}
