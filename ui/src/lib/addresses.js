import { bytesToHex, hexToBytes } from '@stacks/common';
import { AddressVersion } from '@stacks/network';
import * as bitcoin from 'bitcoinjs-lib';
import { b58ToC32, c32address, c32addressDecode, c32checkEncode } from 'c32check';
export const addressInputToStacksPrinicpal = recipient => {
  const stx1 = 'ST1CXK7PNT0ZKW2SJ6PPYNRZW27P4622F5936D8GQ';
  const [version, hash] = c32addressDecode(stx1);
  console.log(version, hash, bitcoin.address.toBech32(hexToBytes(hash), version, 'tb'));

  const [address, name] = recipient.split('.');
  const addrObject = bitcoin.address.fromBech32(address);
  console.log(addrObject);
  const stxAddress = c32address(AddressVersion.TestnetSingleSig, bytesToHex(addrObject.data));
  console.log(stxAddress);
  return stxAddress;
};
