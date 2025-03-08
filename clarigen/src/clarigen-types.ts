
import type { TypedAbiArg, TypedAbiFunction, TypedAbiMap, TypedAbiVariable, Response } from '@clarigen/core';

export const contracts = {
  wrappedBitcoin: {
  "functions": {
    addPrincipalToRole: {"name":"add-principal-to-role","access":"public","args":[{"name":"role-to-add","type":"uint128"},{"name":"principal-to-add","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[roleToAdd: TypedAbiArg<number | bigint, "roleToAdd">, principalToAdd: TypedAbiArg<string, "principalToAdd">], Response<boolean, bigint>>,
    burnTokens: {"name":"burn-tokens","access":"public","args":[{"name":"burn-amount","type":"uint128"},{"name":"burn-from","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[burnAmount: TypedAbiArg<number | bigint, "burnAmount">, burnFrom: TypedAbiArg<string, "burnFrom">], Response<boolean, bigint>>,
    initialize: {"name":"initialize","access":"public","args":[{"name":"name-to-set","type":{"string-ascii":{"length":32}}},{"name":"symbol-to-set","type":{"string-ascii":{"length":32}}},{"name":"decimals-to-set","type":"uint128"},{"name":"initial-owner","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[nameToSet: TypedAbiArg<string, "nameToSet">, symbolToSet: TypedAbiArg<string, "symbolToSet">, decimalsToSet: TypedAbiArg<number | bigint, "decimalsToSet">, initialOwner: TypedAbiArg<string, "initialOwner">], Response<boolean, bigint>>,
    mintTokens: {"name":"mint-tokens","access":"public","args":[{"name":"mint-amount","type":"uint128"},{"name":"mint-to","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[mintAmount: TypedAbiArg<number | bigint, "mintAmount">, mintTo: TypedAbiArg<string, "mintTo">], Response<boolean, bigint>>,
    removePrincipalFromRole: {"name":"remove-principal-from-role","access":"public","args":[{"name":"role-to-remove","type":"uint128"},{"name":"principal-to-remove","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[roleToRemove: TypedAbiArg<number | bigint, "roleToRemove">, principalToRemove: TypedAbiArg<string, "principalToRemove">], Response<boolean, bigint>>,
    revokeTokens: {"name":"revoke-tokens","access":"public","args":[{"name":"revoke-amount","type":"uint128"},{"name":"revoke-from","type":"principal"},{"name":"revoke-to","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[revokeAmount: TypedAbiArg<number | bigint, "revokeAmount">, revokeFrom: TypedAbiArg<string, "revokeFrom">, revokeTo: TypedAbiArg<string, "revokeTo">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"updated-uri","type":{"string-utf8":{"length":256}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[updatedUri: TypedAbiArg<string, "updatedUri">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    updateBlacklisted: {"name":"update-blacklisted","access":"public","args":[{"name":"principal-to-update","type":"principal"},{"name":"set-blacklisted","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[principalToUpdate: TypedAbiArg<string, "principalToUpdate">, setBlacklisted: TypedAbiArg<boolean, "setBlacklisted">], Response<boolean, bigint>>,
    detectTransferRestriction: {"name":"detect-transfer-restriction","access":"read_only","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">], Response<bigint, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"owner","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[owner: TypedAbiArg<string, "owner">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    hasRole: {"name":"has-role","access":"read_only","args":[{"name":"role-to-check","type":"uint128"},{"name":"principal-to-check","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[roleToCheck: TypedAbiArg<number | bigint, "roleToCheck">, principalToCheck: TypedAbiArg<string, "principalToCheck">], boolean>,
    isBlacklisted: {"name":"is-blacklisted","access":"read_only","args":[{"name":"principal-to-check","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[principalToCheck: TypedAbiArg<string, "principalToCheck">], boolean>,
    messageForRestriction: {"name":"message-for-restriction","access":"read_only","args":[{"name":"restriction-code","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":70}},"error":"none"}}}} as TypedAbiFunction<[restrictionCode: TypedAbiArg<number | bigint, "restrictionCode">], Response<string, null>>
  },
  "maps": {
    blacklist: {"name":"blacklist","key":{"tuple":[{"name":"account","type":"principal"}]},"value":{"tuple":[{"name":"blacklisted","type":"bool"}]}} as TypedAbiMap<{
  "account": string;
}, {
  "blacklisted": boolean;
}>,
    roles: {"name":"roles","key":{"tuple":[{"name":"account","type":"principal"},{"name":"role","type":"uint128"}]},"value":{"tuple":[{"name":"allowed","type":"bool"}]}} as TypedAbiMap<{
  "account": string;
  "role": number | bigint;
}, {
  "allowed": boolean;
}>
  },
  "variables": {
    BLACKLISTER_ROLE: {
  name: 'BLACKLISTER_ROLE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    BURNER_ROLE: {
  name: 'BURNER_ROLE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MINTER_ROLE: {
  name: 'MINTER_ROLE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    OWNER_ROLE: {
  name: 'OWNER_ROLE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    PERMISSION_DENIED_ERROR: {
  name: 'PERMISSION_DENIED_ERROR',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    RESTRICTION_BLACKLIST: {
  name: 'RESTRICTION_BLACKLIST',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    RESTRICTION_NONE: {
  name: 'RESTRICTION_NONE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    REVOKER_ROLE: {
  name: 'REVOKER_ROLE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    deployerPrincipal: {
  name: 'deployer-principal',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    isInitialized: {
  name: 'is-initialized',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenSymbol: {
  name: 'token-symbol',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    uri: {
  name: 'uri',
  type: {
    'string-utf8': {
      length: 256
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"wrapped-bitcoin"}],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'Wrapped-Bitcoin',
  },
commissionTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'commission-trait',
  },
emergencyRules: {
  "functions": {
    isAllowedExtension: {"name":"is-allowed-extension","access":"public","args":[{"name":"extension","type":"trait_reference"},{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[extension: TypedAbiArg<string, "extension">, payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, null>>,
    isAllowedStx: {"name":"is-allowed-stx","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, null>>
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'emergency-rules',
  },
extDelegateStxPox4: {
  "functions": {
    call: {"name":"call","access":"public","args":[{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, bigint>>,
    asUintResponse: {"name":"as-uint-response","access":"read_only","args":[{"name":"res","type":{"response":{"ok":"bool","error":"int128"}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[res: TypedAbiArg<Response<boolean, number | bigint>, "res">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    errInvalidCaller: {
  name: 'err-invalid-caller',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errInvalidPayload: {
  name: 'err-invalid-payload',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    owner: {
  name: 'owner',
  type: {
    optional: 'principal'
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {
  errInvalidCaller: {
    isOk: false,
    value: 501n
  },
  errInvalidPayload: {
    isOk: false,
    value: 500n
  },
  owner: null
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'ext-delegate-stx-pox-4',
  },
extSponsoredSbtcTransfer: {
  "functions": {
    sbtcTransfer: {"name":"sbtc-transfer","access":"private","args":[{"name":"amount","type":"uint128"},{"name":"from","type":"principal"},{"name":"to","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, from: TypedAbiArg<string, "from">, to: TypedAbiArg<string, "to">], Response<boolean, bigint>>,
    call: {"name":"call","access":"public","args":[{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    errInvalidPayload: {
  name: 'err-invalid-payload',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>
  },
  constants: {
  errInvalidPayload: {
    isOk: false,
    value: 500n
  }
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'ext-sponsored-sbtc-transfer',
  },
extSponsoredTransfer: {
  "functions": {
    call: {"name":"call","access":"public","args":[{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    errInvalidPayload: {
  name: 'err-invalid-payload',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>
  },
  constants: {
  errInvalidPayload: {
    isOk: false,
    value: 500n
  }
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'ext-sponsored-transfer',
  },
extTest: {
  "functions": {
    call: {"name":"call","access":"public","args":[{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    errInvalidPayload: {
  name: 'err-invalid-payload',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errUnauthorised: {
  name: 'err-unauthorised',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>
  },
  constants: {
  errInvalidPayload: {
    isOk: false,
    value: 500n
  },
  errUnauthorised: {
    isOk: false,
    value: 401n
  }
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'ext-test',
  },
extUnsafeSip010Transfer: {
  "functions": {
    call: {"name":"call","access":"public","args":[{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    errInvalidPayload: {
  name: 'err-invalid-payload',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>
  },
  constants: {
  errInvalidPayload: {
    isOk: false,
    value: 500n
  }
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'ext-unsafe-sip010-transfer',
  },
extensionTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'extension-trait',
  },
ftTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'ft-trait',
  },
inactiveObserver: {
  "functions": {
    closeSmartWallet: {"name":"close-smart-wallet","access":"public","args":[{"name":"wallet","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[wallet: TypedAbiArg<string, "wallet">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'inactive-observer',
  },
microNthng: {
  "functions": {
    mint_x: {"name":"mint!","access":"private","args":[{"name":"account","type":"principal"},{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">, amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"to","type":"principal"},{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[to: TypedAbiArg<string, "to">, amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>
  },
  "maps": {
    
  },
  "variables": {
    totalSupply: {
  name: 'total-supply',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"micro-nothing"}],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'micro-nthng',
  },
nftTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'nft-trait',
  },
noRules: {
  "functions": {
    isAllowedExtension: {"name":"is-allowed-extension","access":"public","args":[{"name":"extension","type":"trait_reference"},{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[extension: TypedAbiArg<string, "extension">, payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, null>>,
    isAllowedStx: {"name":"is-allowed-stx","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, null>>
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'no-rules',
  },
nope: {
  "functions": {
    checkErr: {"name":"check-err","access":"private","args":[{"name":"result","type":{"response":{"ok":"bool","error":"uint128"}}},{"name":"prior","type":{"response":{"ok":"bool","error":"uint128"}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[result: TypedAbiArg<Response<boolean, number | bigint>, "result">, prior: TypedAbiArg<Response<boolean, number | bigint>, "prior">], Response<boolean, bigint>>,
    sendNothingUnwrap: {"name":"send-nothing-unwrap","access":"private","args":[{"name":"recipient","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"to","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[recipient: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "to": string;
}, "recipient">], Response<boolean, bigint>>,
    updateThresholdState: {"name":"update-threshold-state","access":"private","args":[],"outputs":{"type":"bool"}} as TypedAbiFunction<[], boolean>,
    sendMany: {"name":"send-many","access":"public","args":[{"name":"recipients","type":{"list":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"to","type":"principal"}]},"length":200}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[recipients: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "to": string;
}[], "recipients">], Response<boolean, bigint>>,
    sendNothing: {"name":"send-nothing","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    setAdmin: {"name":"set-admin","access":"public","args":[{"name":"new-admin","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newAdmin: TypedAbiArg<string, "newAdmin">], Response<boolean, bigint>>,
    setMetadata: {"name":"set-metadata","access":"public","args":[{"name":"uri","type":{"optional":{"string-utf8":{"length":256}}}},{"name":"name","type":{"string-ascii":{"length":32}}},{"name":"symbol","type":{"string-ascii":{"length":32}}},{"name":"decimals","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[uri: TypedAbiArg<string | null, "uri">, name: TypedAbiArg<string, "name">, symbol: TypedAbiArg<string, "symbol">, decimals: TypedAbiArg<number | bigint, "decimals">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"from","type":"principal"},{"name":"to","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, from: TypedAbiArg<string, "from">, to: TypedAbiArg<string, "to">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    unwrap: {"name":"unwrap","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    wrapNthng: {"name":"wrap-nthng","access":"public","args":[{"name":"amount","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">], Response<boolean, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"user","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[user: TypedAbiArg<string, "user">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    isSafeToWrap: {"name":"is-safe-to-wrap","access":"read_only","args":[{"name":"amount","type":"uint128"},{"name":"wrapper","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, wrapper: TypedAbiArg<string, "wrapper">], boolean>
  },
  "maps": {
    
  },
  "variables": {
    ERR_INVALID_PARAMS: {
  name: 'ERR-INVALID-PARAMS',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_UNAUTHORIZED: {
  name: 'ERR-UNAUTHORIZED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_YOU_POOR: {
  name: 'ERR-YOU-POOR',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    MAX_SUPPLY: {
  name: 'MAX-SUPPLY',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    WRAP_THRESHOLD: {
  name: 'WRAP-THRESHOLD',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    contractAdmin: {
  name: 'contract-admin',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    isThresholdReached: {
  name: 'is-threshold-reached',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenSymbol: {
  name: 'token-symbol',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"NOT"}],"epoch":"Epoch24","clarity_version":"Clarity2",
  contractName: 'nope',
  },
ogBitcoinPizzaLeatherEdition: {
  "functions": {
    isOwner: {"name":"is-owner","access":"private","args":[{"name":"token-id","type":"uint128"},{"name":"user","type":"principal"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[tokenId: TypedAbiArg<number | bigint, "tokenId">, user: TypedAbiArg<string, "user">], boolean>,
    isSenderOwner: {"name":"is-sender-owner","access":"private","args":[{"name":"id","type":"uint128"}],"outputs":{"type":"bool"}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], boolean>,
    mintMany: {"name":"mint-many","access":"private","args":[{"name":"uris","type":{"list":{"type":{"string-ascii":{"length":64}},"length":25}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[uris: TypedAbiArg<string[], "uris">], Response<bigint, bigint>>,
    mintManyIter: {"name":"mint-many-iter","access":"private","args":[{"name":"hash","type":{"string-ascii":{"length":64}}},{"name":"next-id","type":"uint128"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[hash: TypedAbiArg<string, "hash">, nextId: TypedAbiArg<number | bigint, "nextId">], bigint>,
    payRoyalty: {"name":"pay-royalty","access":"private","args":[{"name":"price","type":"uint128"},{"name":"royalty","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[price: TypedAbiArg<number | bigint, "price">, royalty: TypedAbiArg<number | bigint, "royalty">], Response<boolean, bigint>>,
    trnsfr: {"name":"trnsfr","access":"private","args":[{"name":"id","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    burn: {"name":"burn","access":"public","args":[{"name":"token-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[tokenId: TypedAbiArg<number | bigint, "tokenId">], Response<boolean, bigint>>,
    buyInUstx: {"name":"buy-in-ustx","access":"public","args":[{"name":"id","type":"uint128"},{"name":"comm-trait","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, commTrait: TypedAbiArg<string, "commTrait">], Response<boolean, bigint>>,
    claim: {"name":"claim","access":"public","args":[{"name":"uris","type":{"list":{"type":{"string-ascii":{"length":64}},"length":25}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[uris: TypedAbiArg<string[], "uris">], Response<bigint, bigint>>,
    freezeMetadata: {"name":"freeze-metadata","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    listInUstx: {"name":"list-in-ustx","access":"public","args":[{"name":"id","type":"uint128"},{"name":"price","type":"uint128"},{"name":"comm-trait","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, price: TypedAbiArg<number | bigint, "price">, commTrait: TypedAbiArg<string, "commTrait">], Response<boolean, bigint>>,
    lockContract: {"name":"lock-contract","access":"public","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    setArtistAddress: {"name":"set-artist-address","access":"public","args":[{"name":"address","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[address: TypedAbiArg<string, "address">], Response<boolean, bigint>>,
    setLicenseName: {"name":"set-license-name","access":"public","args":[{"name":"name","type":{"string-ascii":{"length":40}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[name: TypedAbiArg<string, "name">], Response<boolean, bigint>>,
    setLicenseUri: {"name":"set-license-uri","access":"public","args":[{"name":"uri","type":{"string-ascii":{"length":80}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[uri: TypedAbiArg<string, "uri">], Response<boolean, bigint>>,
    setRoyaltyPercent: {"name":"set-royalty-percent","access":"public","args":[{"name":"royalty","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[royalty: TypedAbiArg<number | bigint, "royalty">], Response<boolean, bigint>>,
    setTokenUri: {"name":"set-token-uri","access":"public","args":[{"name":"hash","type":{"string-ascii":{"length":64}}},{"name":"token-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[hash: TypedAbiArg<string, "hash">, tokenId: TypedAbiArg<number | bigint, "tokenId">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"id","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    unlistInUstx: {"name":"unlist-in-ustx","access":"public","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], Response<boolean, bigint>>,
    getArtistAddress: {"name":"get-artist-address","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"principal","error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"account","type":"principal"}],"outputs":{"type":"uint128"}} as TypedAbiFunction<[account: TypedAbiArg<string, "account">], bigint>,
    getLastTokenId: {"name":"get-last-token-id","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getLicenseName: {"name":"get-license-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":40}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getLicenseUri: {"name":"get-license-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":80}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getListingInUstx: {"name":"get-listing-in-ustx","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"commission","type":"principal"},{"name":"price","type":"uint128"},{"name":"royalty","type":"uint128"}]}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], {
  "commission": string;
  "price": bigint;
  "royalty": bigint;
} | null>,
    getOwner: {"name":"get-owner","access":"read_only","args":[{"name":"token-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"optional":"principal"},"error":"none"}}}} as TypedAbiFunction<[tokenId: TypedAbiArg<number | bigint, "tokenId">], Response<string | null, null>>,
    getRoyaltyPercent: {"name":"get-royalty-percent","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[{"name":"token-id","type":"uint128"}],"outputs":{"type":{"response":{"ok":{"optional":{"string-ascii":{"length":71}}},"error":"none"}}}} as TypedAbiFunction<[tokenId: TypedAbiArg<number | bigint, "tokenId">], Response<string | null, null>>
  },
  "maps": {
    cids: {"name":"cids","key":"uint128","value":{"string-ascii":{"length":64}}} as TypedAbiMap<number | bigint, string>,
    market: {"name":"market","key":"uint128","value":{"tuple":[{"name":"commission","type":"principal"},{"name":"price","type":"uint128"},{"name":"royalty","type":"uint128"}]}} as TypedAbiMap<number | bigint, {
  "commission": string;
  "price": bigint;
  "royalty": bigint;
}>,
    tokenCount: {"name":"token-count","key":"principal","value":"uint128"} as TypedAbiMap<string, bigint>
  },
  "variables": {
    DEPLOYER: {
  name: 'DEPLOYER',
  type: 'principal',
  access: 'constant'
} as TypedAbiVariable<string>,
    ERR_CONTRACT_LOCKED: {
  name: 'ERR-CONTRACT-LOCKED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_INVALID_PERCENTAGE: {
  name: 'ERR-INVALID-PERCENTAGE',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_INVALID_USER: {
  name: 'ERR-INVALID-USER',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_LISTING: {
  name: 'ERR-LISTING',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_METADATA_FROZEN: {
  name: 'ERR-METADATA-FROZEN',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_NFT_MINT: {
  name: 'ERR-NFT-MINT',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_NOT_AUTHORIZED: {
  name: 'ERR-NOT-AUTHORIZED',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_NOT_FOUND: {
  name: 'ERR-NOT-FOUND',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_WRONG_COMMISSION: {
  name: 'ERR-WRONG-COMMISSION',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    artistAddress: {
  name: 'artist-address',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    lastId: {
  name: 'last-id',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    licenseName: {
  name: 'license-name',
  type: {
    'string-ascii': {
      length: 40
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    licenseUri: {
  name: 'license-uri',
  type: {
    'string-ascii': {
      length: 80
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    locked: {
  name: 'locked',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    metadataFrozen: {
  name: 'metadata-frozen',
  type: 'bool',
  access: 'variable'
} as TypedAbiVariable<boolean>,
    royaltyPercent: {
  name: 'royalty-percent',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {},
  "non_fungible_tokens": [
    {"name":"og-bitcoin-pizza-leather-edition","type":"uint128"}
  ],
  "fungible_tokens":[],"epoch":"Epoch25","clarity_version":"Clarity2",
  contractName: 'og-bitcoin-pizza-leather-edition',
  },
restrictedTokenTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'restricted-token-trait',
  },
ruleSetTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'rule-set-trait',
  },
sbtcDeposit: {
  "functions": {
    completeIndividualDepositsHelper: {"name":"complete-individual-deposits-helper","access":"private","args":[{"name":"deposit","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"burn-hash","type":{"buffer":{"length":32}}},{"name":"burn-height","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"sweep-txid","type":{"buffer":{"length":32}}},{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}]}},{"name":"helper-response","type":{"response":{"ok":"uint128","error":"uint128"}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[deposit: TypedAbiArg<{
  "amount": number | bigint;
  "burnHash": Uint8Array;
  "burnHeight": number | bigint;
  "recipient": string;
  "sweepTxid": Uint8Array;
  "txid": Uint8Array;
  "voutIndex": number | bigint;
}, "deposit">, helperResponse: TypedAbiArg<Response<number | bigint, number | bigint>, "helperResponse">], Response<bigint, bigint>>,
    completeDepositWrapper: {"name":"complete-deposit-wrapper","access":"public","args":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"burn-hash","type":{"buffer":{"length":32}}},{"name":"burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[txid: TypedAbiArg<Uint8Array, "txid">, voutIndex: TypedAbiArg<number | bigint, "voutIndex">, amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, burnHash: TypedAbiArg<Uint8Array, "burnHash">, burnHeight: TypedAbiArg<number | bigint, "burnHeight">, sweepTxid: TypedAbiArg<Uint8Array, "sweepTxid">], Response<boolean, bigint>>,
    completeDepositsWrapper: {"name":"complete-deposits-wrapper","access":"public","args":[{"name":"deposits","type":{"list":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"burn-hash","type":{"buffer":{"length":32}}},{"name":"burn-height","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"sweep-txid","type":{"buffer":{"length":32}}},{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}]},"length":500}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[deposits: TypedAbiArg<{
  "amount": number | bigint;
  "burnHash": Uint8Array;
  "burnHeight": number | bigint;
  "recipient": string;
  "sweepTxid": Uint8Array;
  "txid": Uint8Array;
  "voutIndex": number | bigint;
}[], "deposits">], Response<bigint, bigint>>,
    getBurnHeader: {"name":"get-burn-header","access":"read_only","args":[{"name":"height","type":"uint128"}],"outputs":{"type":{"optional":{"buffer":{"length":32}}}}} as TypedAbiFunction<[height: TypedAbiArg<number | bigint, "height">], Uint8Array | null>
  },
  "maps": {
    
  },
  "variables": {
    ERR_DEPOSIT: {
  name: 'ERR_DEPOSIT',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_DEPOSIT_INDEX_PREFIX: {
  name: 'ERR_DEPOSIT_INDEX_PREFIX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    ERR_DEPOSIT_REPLAY: {
  name: 'ERR_DEPOSIT_REPLAY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_BURN_HASH: {
  name: 'ERR_INVALID_BURN_HASH',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_CALLER: {
  name: 'ERR_INVALID_CALLER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_LOWER_THAN_DUST: {
  name: 'ERR_LOWER_THAN_DUST',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TXID_LEN: {
  name: 'ERR_TXID_LEN',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    depositRole: {
  name: 'deposit-role',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    dustLimit: {
  name: 'dust-limit',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    txidLength: {
  name: 'txid-length',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch30","clarity_version":"Clarity3",
  contractName: 'sbtc-deposit',
  },
sbtcRegistry: {
  "functions": {
    incrementLastWithdrawalRequestId: {"name":"increment-last-withdrawal-request-id","access":"private","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    completeDeposit: {"name":"complete-deposit","access":"public","args":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"burn-hash","type":{"buffer":{"length":32}}},{"name":"burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[txid: TypedAbiArg<Uint8Array, "txid">, voutIndex: TypedAbiArg<number | bigint, "voutIndex">, amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, burnHash: TypedAbiArg<Uint8Array, "burnHash">, burnHeight: TypedAbiArg<number | bigint, "burnHeight">, sweepTxid: TypedAbiArg<Uint8Array, "sweepTxid">], Response<boolean, bigint>>,
    completeWithdrawalAccept: {"name":"complete-withdrawal-accept","access":"public","args":[{"name":"request-id","type":"uint128"},{"name":"bitcoin-txid","type":{"buffer":{"length":32}}},{"name":"output-index","type":"uint128"},{"name":"signer-bitmap","type":"uint128"},{"name":"fee","type":"uint128"},{"name":"burn-hash","type":{"buffer":{"length":32}}},{"name":"burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[requestId: TypedAbiArg<number | bigint, "requestId">, bitcoinTxid: TypedAbiArg<Uint8Array, "bitcoinTxid">, outputIndex: TypedAbiArg<number | bigint, "outputIndex">, signerBitmap: TypedAbiArg<number | bigint, "signerBitmap">, fee: TypedAbiArg<number | bigint, "fee">, burnHash: TypedAbiArg<Uint8Array, "burnHash">, burnHeight: TypedAbiArg<number | bigint, "burnHeight">, sweepTxid: TypedAbiArg<Uint8Array, "sweepTxid">], Response<boolean, bigint>>,
    completeWithdrawalReject: {"name":"complete-withdrawal-reject","access":"public","args":[{"name":"request-id","type":"uint128"},{"name":"signer-bitmap","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[requestId: TypedAbiArg<number | bigint, "requestId">, signerBitmap: TypedAbiArg<number | bigint, "signerBitmap">], Response<boolean, bigint>>,
    createWithdrawalRequest: {"name":"create-withdrawal-request","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"max-fee","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"height","type":"uint128"}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, maxFee: TypedAbiArg<number | bigint, "maxFee">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<{
  "hashbytes": Uint8Array;
  "version": Uint8Array;
}, "recipient">, height: TypedAbiArg<number | bigint, "height">], Response<bigint, bigint>>,
    rotateKeys: {"name":"rotate-keys","access":"public","args":[{"name":"new-keys","type":{"list":{"type":{"buffer":{"length":33}},"length":128}}},{"name":"new-address","type":"principal"},{"name":"new-aggregate-pubkey","type":{"buffer":{"length":33}}},{"name":"new-signature-threshold","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newKeys: TypedAbiArg<Uint8Array[], "newKeys">, newAddress: TypedAbiArg<string, "newAddress">, newAggregatePubkey: TypedAbiArg<Uint8Array, "newAggregatePubkey">, newSignatureThreshold: TypedAbiArg<number | bigint, "newSignatureThreshold">], Response<boolean, bigint>>,
    updateProtocolContract: {"name":"update-protocol-contract","access":"public","args":[{"name":"contract-type","type":{"buffer":{"length":1}}},{"name":"new-contract","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contractType: TypedAbiArg<Uint8Array, "contractType">, newContract: TypedAbiArg<string, "newContract">], Response<boolean, bigint>>,
    getActiveProtocol: {"name":"get-active-protocol","access":"read_only","args":[{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"optional":"principal"}}} as TypedAbiFunction<[contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], string | null>,
    getCompletedDeposit: {"name":"get-completed-deposit","access":"read_only","args":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"sweep-burn-hash","type":{"buffer":{"length":32}}},{"name":"sweep-burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}]}}}} as TypedAbiFunction<[txid: TypedAbiArg<Uint8Array, "txid">, voutIndex: TypedAbiArg<number | bigint, "voutIndex">], {
  "amount": bigint;
  "recipient": string;
  "sweepBurnHash": Uint8Array;
  "sweepBurnHeight": bigint;
  "sweepTxid": Uint8Array;
} | null>,
    getCompletedWithdrawalSweepData: {"name":"get-completed-withdrawal-sweep-data","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"sweep-burn-hash","type":{"buffer":{"length":32}}},{"name":"sweep-burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}]}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], {
  "sweepBurnHash": Uint8Array;
  "sweepBurnHeight": bigint;
  "sweepTxid": Uint8Array;
} | null>,
    getCurrentAggregatePubkey: {"name":"get-current-aggregate-pubkey","access":"read_only","args":[],"outputs":{"type":{"buffer":{"length":33}}}} as TypedAbiFunction<[], Uint8Array>,
    getCurrentSignerData: {"name":"get-current-signer-data","access":"read_only","args":[],"outputs":{"type":{"tuple":[{"name":"current-aggregate-pubkey","type":{"buffer":{"length":33}}},{"name":"current-signature-threshold","type":"uint128"},{"name":"current-signer-principal","type":"principal"},{"name":"current-signer-set","type":{"list":{"type":{"buffer":{"length":33}},"length":128}}}]}}} as TypedAbiFunction<[], {
  "currentAggregatePubkey": Uint8Array;
  "currentSignatureThreshold": bigint;
  "currentSignerPrincipal": string;
  "currentSignerSet": Uint8Array[];
}>,
    getCurrentSignerPrincipal: {"name":"get-current-signer-principal","access":"read_only","args":[],"outputs":{"type":"principal"}} as TypedAbiFunction<[], string>,
    getCurrentSignerSet: {"name":"get-current-signer-set","access":"read_only","args":[],"outputs":{"type":{"list":{"type":{"buffer":{"length":33}},"length":128}}}} as TypedAbiFunction<[], Uint8Array[]>,
    getDepositStatus: {"name":"get-deposit-status","access":"read_only","args":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}],"outputs":{"type":{"optional":"bool"}}} as TypedAbiFunction<[txid: TypedAbiArg<Uint8Array, "txid">, voutIndex: TypedAbiArg<number | bigint, "voutIndex">], boolean | null>,
    getWithdrawalRequest: {"name":"get-withdrawal-request","access":"read_only","args":[{"name":"id","type":"uint128"}],"outputs":{"type":{"optional":{"tuple":[{"name":"amount","type":"uint128"},{"name":"block-height","type":"uint128"},{"name":"max-fee","type":"uint128"},{"name":"recipient","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"sender","type":"principal"},{"name":"status","type":{"optional":"bool"}}]}}}} as TypedAbiFunction<[id: TypedAbiArg<number | bigint, "id">], {
  "amount": bigint;
  "blockHeight": bigint;
  "maxFee": bigint;
  "recipient": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "sender": string;
  "status": boolean | null;
} | null>,
    isProtocolCaller: {"name":"is-protocol-caller","access":"read_only","args":[{"name":"contract-flag","type":{"buffer":{"length":1}}},{"name":"contract","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[contractFlag: TypedAbiArg<Uint8Array, "contractFlag">, contract: TypedAbiArg<string, "contract">], Response<boolean, bigint>>
  },
  "maps": {
    activeProtocolContracts: {"name":"active-protocol-contracts","key":{"buffer":{"length":1}},"value":"principal"} as TypedAbiMap<Uint8Array, string>,
    activeProtocolRoles: {"name":"active-protocol-roles","key":"principal","value":{"buffer":{"length":1}}} as TypedAbiMap<string, Uint8Array>,
    aggregatePubkeys: {"name":"aggregate-pubkeys","key":{"buffer":{"length":33}},"value":"bool"} as TypedAbiMap<Uint8Array, boolean>,
    completedDeposits: {"name":"completed-deposits","key":{"tuple":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}]},"value":{"tuple":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"sweep-burn-hash","type":{"buffer":{"length":32}}},{"name":"sweep-burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}]}} as TypedAbiMap<{
  "txid": Uint8Array;
  "voutIndex": number | bigint;
}, {
  "amount": bigint;
  "recipient": string;
  "sweepBurnHash": Uint8Array;
  "sweepBurnHeight": bigint;
  "sweepTxid": Uint8Array;
}>,
    completedWithdrawalSweep: {"name":"completed-withdrawal-sweep","key":"uint128","value":{"tuple":[{"name":"sweep-burn-hash","type":{"buffer":{"length":32}}},{"name":"sweep-burn-height","type":"uint128"},{"name":"sweep-txid","type":{"buffer":{"length":32}}}]}} as TypedAbiMap<number | bigint, {
  "sweepBurnHash": Uint8Array;
  "sweepBurnHeight": bigint;
  "sweepTxid": Uint8Array;
}>,
    depositStatus: {"name":"deposit-status","key":{"tuple":[{"name":"txid","type":{"buffer":{"length":32}}},{"name":"vout-index","type":"uint128"}]},"value":"bool"} as TypedAbiMap<{
  "txid": Uint8Array;
  "voutIndex": number | bigint;
}, boolean>,
    withdrawalRequests: {"name":"withdrawal-requests","key":"uint128","value":{"tuple":[{"name":"amount","type":"uint128"},{"name":"block-height","type":"uint128"},{"name":"max-fee","type":"uint128"},{"name":"recipient","type":{"tuple":[{"name":"hashbytes","type":{"buffer":{"length":32}}},{"name":"version","type":{"buffer":{"length":1}}}]}},{"name":"sender","type":"principal"}]}} as TypedAbiMap<number | bigint, {
  "amount": bigint;
  "blockHeight": bigint;
  "maxFee": bigint;
  "recipient": {
  "hashbytes": Uint8Array;
  "version": Uint8Array;
};
  "sender": string;
}>,
    withdrawalStatus: {"name":"withdrawal-status","key":"uint128","value":"bool"} as TypedAbiMap<number | bigint, boolean>
  },
  "variables": {
    ERR_AGG_PUBKEY_REPLAY: {
  name: 'ERR_AGG_PUBKEY_REPLAY',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_INVALID_REQUEST_ID: {
  name: 'ERR_INVALID_REQUEST_ID',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_UNAUTHORIZED: {
  name: 'ERR_UNAUTHORIZED',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    depositRole: {
  name: 'deposit-role',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    governanceRole: {
  name: 'governance-role',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    withdrawalRole: {
  name: 'withdrawal-role',
  type: {
    buffer: {
      length: 1
    }
  },
  access: 'constant'
} as TypedAbiVariable<Uint8Array>,
    currentAggregatePubkey: {
  name: 'current-aggregate-pubkey',
  type: {
    buffer: {
      length: 33
    }
  },
  access: 'variable'
} as TypedAbiVariable<Uint8Array>,
    currentSignatureThreshold: {
  name: 'current-signature-threshold',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    currentSignerPrincipal: {
  name: 'current-signer-principal',
  type: 'principal',
  access: 'variable'
} as TypedAbiVariable<string>,
    currentSignerSet: {
  name: 'current-signer-set',
  type: {
    list: {
      type: {
        buffer: {
          length: 33
        }
      },
      length: 128
    }
  },
  access: 'variable'
} as TypedAbiVariable<Uint8Array[]>,
    lastWithdrawalRequestId: {
  name: 'last-withdrawal-request-id',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch30","clarity_version":"Clarity3",
  contractName: 'sbtc-registry',
  },
sbtcToken: {
  "functions": {
    protocolMintManyIter: {"name":"protocol-mint-many-iter","access":"private","args":[{"name":"item","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[item: TypedAbiArg<{
  "amount": number | bigint;
  "recipient": string;
}, "item">], Response<boolean, bigint>>,
    transferManyIter: {"name":"transfer-many-iter","access":"private","args":[{"name":"individual-transfer","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"sender","type":"principal"},{"name":"to","type":"principal"}]}},{"name":"result","type":{"response":{"ok":"uint128","error":"uint128"}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[individualTransfer: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "sender": string;
  "to": string;
}, "individualTransfer">, result: TypedAbiArg<Response<number | bigint, number | bigint>, "result">], Response<bigint, bigint>>,
    protocolBurn: {"name":"protocol-burn","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolBurnLocked: {"name":"protocol-burn-locked","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolLock: {"name":"protocol-lock","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolMint: {"name":"protocol-mint","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolMintMany: {"name":"protocol-mint-many","access":"public","args":[{"name":"recipients","type":{"list":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}]},"length":200}}},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":{"list":{"type":{"response":{"ok":"bool","error":"uint128"}},"length":200}},"error":"uint128"}}}} as TypedAbiFunction<[recipients: TypedAbiArg<{
  "amount": number | bigint;
  "recipient": string;
}[], "recipients">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<Response<boolean, bigint>[], bigint>>,
    protocolSetName: {"name":"protocol-set-name","access":"public","args":[{"name":"new-name","type":{"string-ascii":{"length":32}}},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newName: TypedAbiArg<string, "newName">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolSetSymbol: {"name":"protocol-set-symbol","access":"public","args":[{"name":"new-symbol","type":{"string-ascii":{"length":10}}},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newSymbol: TypedAbiArg<string, "newSymbol">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolSetTokenUri: {"name":"protocol-set-token-uri","access":"public","args":[{"name":"new-uri","type":{"optional":{"string-utf8":{"length":256}}}},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newUri: TypedAbiArg<string | null, "newUri">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    protocolUnlock: {"name":"protocol-unlock","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"owner","type":"principal"},{"name":"contract-flag","type":{"buffer":{"length":1}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, owner: TypedAbiArg<string, "owner">, contractFlag: TypedAbiArg<Uint8Array, "contractFlag">], Response<boolean, bigint>>,
    transfer: {"name":"transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"sender","type":"principal"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, sender: TypedAbiArg<string, "sender">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    transferMany: {"name":"transfer-many","access":"public","args":[{"name":"recipients","type":{"list":{"type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"sender","type":"principal"},{"name":"to","type":"principal"}]},"length":200}}}],"outputs":{"type":{"response":{"ok":"uint128","error":"uint128"}}}} as TypedAbiFunction<[recipients: TypedAbiArg<{
  "amount": number | bigint;
  "memo": Uint8Array | null;
  "sender": string;
  "to": string;
}[], "recipients">], Response<bigint, bigint>>,
    getBalance: {"name":"get-balance","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getBalanceAvailable: {"name":"get-balance-available","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getBalanceLocked: {"name":"get-balance-locked","access":"read_only","args":[{"name":"who","type":"principal"}],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[who: TypedAbiArg<string, "who">], Response<bigint, null>>,
    getDecimals: {"name":"get-decimals","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>,
    getName: {"name":"get-name","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":32}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getSymbol: {"name":"get-symbol","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"string-ascii":{"length":10}},"error":"none"}}}} as TypedAbiFunction<[], Response<string, null>>,
    getTokenUri: {"name":"get-token-uri","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":{"optional":{"string-utf8":{"length":256}}},"error":"none"}}}} as TypedAbiFunction<[], Response<string | null, null>>,
    getTotalSupply: {"name":"get-total-supply","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"uint128","error":"none"}}}} as TypedAbiFunction<[], Response<bigint, null>>
  },
  "maps": {
    
  },
  "variables": {
    ERR_NOT_OWNER: {
  name: 'ERR_NOT_OWNER',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    ERR_TRANSFER_INDEX_PREFIX: {
  name: 'ERR_TRANSFER_INDEX_PREFIX',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    tokenDecimals: {
  name: 'token-decimals',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    tokenName: {
  name: 'token-name',
  type: {
    'string-ascii': {
      length: 32
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenSymbol: {
  name: 'token-symbol',
  type: {
    'string-ascii': {
      length: 10
    }
  },
  access: 'variable'
} as TypedAbiVariable<string>,
    tokenUri: {
  name: 'token-uri',
  type: {
    optional: {
      'string-utf8': {
        length: 256
      }
    }
  },
  access: 'variable'
} as TypedAbiVariable<string | null>
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"sbtc-token"},{"name":"sbtc-token-locked"}],"epoch":"Epoch30","clarity_version":"Clarity3",
  contractName: 'sbtc-token',
  },
sip010TraitFtStandard: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'sip-010-trait-ft-standard',
  },
sip013SemiFungibleTokenTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch21","clarity_version":"Clarity1",
  contractName: 'sip013-semi-fungible-token-trait',
  },
smartWalletEndpoint: {
  "functions": {
    delegateStx: {"name":"delegate-stx","access":"public","args":[{"name":"sm","type":"trait_reference"},{"name":"extension","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"to","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[sm: TypedAbiArg<string, "sm">, extension: TypedAbiArg<string, "extension">, amount: TypedAbiArg<number | bigint, "amount">, to: TypedAbiArg<string, "to">], Response<boolean, bigint>>,
    revokeDelegateStx: {"name":"revoke-delegate-stx","access":"public","args":[{"name":"sm","type":"trait_reference"},{"name":"extension","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[sm: TypedAbiArg<string, "sm">, extension: TypedAbiArg<string, "extension">], Response<boolean, bigint>>,
    sbtcTransferSponsored: {"name":"sbtc-transfer-sponsored","access":"public","args":[{"name":"sm","type":"trait_reference"},{"name":"details","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"fees","type":"uint128"},{"name":"to","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[sm: TypedAbiArg<string, "sm">, details: TypedAbiArg<{
  "amount": number | bigint;
  "fees": number | bigint;
  "to": string;
}, "details">], Response<boolean, bigint>>,
    stxTransferSponsored: {"name":"stx-transfer-sponsored","access":"public","args":[{"name":"sm","type":"trait_reference"},{"name":"details","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"fees","type":"uint128"},{"name":"to","type":"principal"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[sm: TypedAbiArg<string, "sm">, details: TypedAbiArg<{
  "amount": number | bigint;
  "fees": number | bigint;
  "to": string;
}, "details">], Response<boolean, bigint>>,
    transferUnsafeSip010Token: {"name":"transfer-unsafe-sip-010-token","access":"public","args":[{"name":"sm","type":"trait_reference"},{"name":"details","type":{"tuple":[{"name":"amount","type":"uint128"},{"name":"to","type":"principal"},{"name":"token","type":"trait_reference"}]}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[sm: TypedAbiArg<string, "sm">, details: TypedAbiArg<{
  "amount": number | bigint;
  "to": string;
  "token": string;
}, "details">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    errInvalidPayload: {
  name: 'err-invalid-payload',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>
  },
  constants: {
  errInvalidPayload: {
    isOk: false,
    value: 5_000n
  }
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'smart-wallet-endpoint',
  },
smartWalletStandard: {
  "functions": {
    enableAdmin: {"name":"enable-admin","access":"public","args":[{"name":"admin","type":"principal"},{"name":"enabled","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[admin: TypedAbiArg<string, "admin">, enabled: TypedAbiArg<boolean, "enabled">], Response<boolean, bigint>>,
    extensionCall: {"name":"extension-call","access":"public","args":[{"name":"extension","type":"trait_reference"},{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[extension: TypedAbiArg<string, "extension">, payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, bigint>>,
    sip009Transfer: {"name":"sip009-transfer","access":"public","args":[{"name":"nft-id","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"sip009","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[nftId: TypedAbiArg<number | bigint, "nftId">, recipient: TypedAbiArg<string, "recipient">, sip009: TypedAbiArg<string, "sip009">], Response<boolean, bigint>>,
    sip010Transfer: {"name":"sip010-transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"sip010","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">, sip010: TypedAbiArg<string, "sip010">], Response<boolean, bigint>>,
    stxTransfer: {"name":"stx-transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    transferWallet: {"name":"transfer-wallet","access":"public","args":[{"name":"new-admin","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newAdmin: TypedAbiArg<string, "newAdmin">], Response<boolean, bigint>>,
    isAdminCalling: {"name":"is-admin-calling","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>
  },
  "maps": {
    admins: {"name":"admins","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>
  },
  "variables": {
    errForbidden: {
  name: 'err-forbidden',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errUnauthorised: {
  name: 'err-unauthorised',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>
  },
  constants: {
  errForbidden: {
    isOk: false,
    value: 4_003n
  },
  errUnauthorised: {
    isOk: false,
    value: 4_001n
  }
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[{"name":"ect"}],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'smart-wallet-standard',
  },
smartWalletTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'smart-wallet-trait',
  },
smartWalletWithRules: {
  "functions": {
    isAllowedExtension: {"name":"is-allowed-extension","access":"private","args":[{"name":"rules","type":"trait_reference"},{"name":"extension","type":"trait_reference"},{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[rules: TypedAbiArg<string, "rules">, extension: TypedAbiArg<string, "extension">, payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, bigint>>,
    isAllowedSip009: {"name":"is-allowed-sip009","access":"private","args":[{"name":"sip009","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[sip009: TypedAbiArg<string, "sip009">, amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">], Response<boolean, bigint>>,
    isAllowedSip010: {"name":"is-allowed-sip010","access":"private","args":[{"name":"sip010","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[sip010: TypedAbiArg<string, "sip010">, amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    isAllowedStx: {"name":"is-allowed-stx","access":"private","args":[{"name":"rules","type":"trait_reference"},{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[rules: TypedAbiArg<string, "rules">, amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    enableAdmin: {"name":"enable-admin","access":"public","args":[{"name":"admin","type":"principal"},{"name":"enabled","type":"bool"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[admin: TypedAbiArg<string, "admin">, enabled: TypedAbiArg<boolean, "enabled">], Response<boolean, bigint>>,
    extensionCall: {"name":"extension-call","access":"public","args":[{"name":"extension","type":"trait_reference"},{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[extension: TypedAbiArg<string, "extension">, payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, bigint>>,
    setSecurityLevel: {"name":"set-security-level","access":"public","args":[{"name":"new-level","type":"uint128"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[newLevel: TypedAbiArg<number | bigint, "newLevel">], Response<boolean, bigint>>,
    sip009Transfer: {"name":"sip009-transfer","access":"public","args":[{"name":"nft-id","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"sip009","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[nftId: TypedAbiArg<number | bigint, "nftId">, recipient: TypedAbiArg<string, "recipient">, sip009: TypedAbiArg<string, "sip009">], Response<boolean, bigint>>,
    sip010Transfer: {"name":"sip010-transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}},{"name":"sip010","type":"trait_reference"}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">, sip010: TypedAbiArg<string, "sip010">], Response<boolean, bigint>>,
    stxTransfer: {"name":"stx-transfer","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>,
    currentRules: {"name":"current-rules","access":"read_only","args":[],"outputs":{"type":"trait_reference"}} as TypedAbiFunction<[], string>,
    getTime: {"name":"get-time","access":"read_only","args":[],"outputs":{"type":"uint128"}} as TypedAbiFunction<[], bigint>,
    isAdminCalling: {"name":"is-admin-calling","access":"read_only","args":[],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[], Response<boolean, bigint>>,
    isInactive: {"name":"is-inactive","access":"read_only","args":[],"outputs":{"type":"bool"}} as TypedAbiFunction<[], boolean>,
    toTrait: {"name":"to-trait","access":"read_only","args":[{"name":"trait","type":"trait_reference"}],"outputs":{"type":"trait_reference"}} as TypedAbiFunction<[trait: TypedAbiArg<string, "trait">], string>
  },
  "maps": {
    admins: {"name":"admins","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>,
    ruleSets: {"name":"rule-sets","key":"principal","value":"bool"} as TypedAbiMap<string, boolean>
  },
  "variables": {
    activityPeriod: {
  name: 'activity-period',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    errForbidden: {
  name: 'err-forbidden',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    errUnauthorised: {
  name: 'err-unauthorised',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    lastTxTime: {
  name: 'last-tx-time',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>,
    securityLevel: {
  name: 'security-level',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  activityPeriod: 1_000n,
  errForbidden: {
    isOk: false,
    value: 403n
  },
  errUnauthorised: {
    isOk: false,
    value: 401n
  },
  lastTxTime: 0n,
  securityLevel: 1n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'smart-wallet-with-rules',
  },
smartWalletWithRulesTrait: {
  "functions": {
    
  },
  "maps": {
    
  },
  "variables": {
    
  },
  constants: {},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'smart-wallet-with-rules-trait',
  },
standardRules: {
  "functions": {
    isAllowedExtension: {"name":"is-allowed-extension","access":"public","args":[{"name":"extension","type":"trait_reference"},{"name":"payload","type":{"buffer":{"length":2048}}}],"outputs":{"type":{"response":{"ok":"bool","error":"none"}}}} as TypedAbiFunction<[extension: TypedAbiArg<string, "extension">, payload: TypedAbiArg<Uint8Array, "payload">], Response<boolean, null>>,
    isAllowedStx: {"name":"is-allowed-stx","access":"public","args":[{"name":"amount","type":"uint128"},{"name":"recipient","type":"principal"},{"name":"memo","type":{"optional":{"buffer":{"length":34}}}}],"outputs":{"type":{"response":{"ok":"bool","error":"uint128"}}}} as TypedAbiFunction<[amount: TypedAbiArg<number | bigint, "amount">, recipient: TypedAbiArg<string, "recipient">, memo: TypedAbiArg<Uint8Array | null, "memo">], Response<boolean, bigint>>
  },
  "maps": {
    
  },
  "variables": {
    e6: {
  name: 'E6',
  type: 'uint128',
  access: 'constant'
} as TypedAbiVariable<bigint>,
    errUnauthorised: {
  name: 'err-unauthorised',
  type: {
    response: {
      ok: 'none',
      error: 'uint128'
    }
  },
  access: 'constant'
} as TypedAbiVariable<Response<null, bigint>>,
    weeklyAmount: {
  name: 'weekly-amount',
  type: 'uint128',
  access: 'variable'
} as TypedAbiVariable<bigint>
  },
  constants: {
  e6: 1_000_000n,
  errUnauthorised: {
    isOk: false,
    value: 401n
  },
  weeklyAmount: 0n
},
  "non_fungible_tokens": [
    
  ],
  "fungible_tokens":[],"epoch":"Epoch31","clarity_version":"Clarity3",
  contractName: 'standard-rules',
  }
} as const;

export const accounts = {"deployer":{"address":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM","balance":"99999999999000"},"faucet":{"address":"STNHKEPYEPJ8ET55ZZ0M5A34J0R3N5FM2CMMMAZ6","balance":"100000000000000"},"wallet_1":{"address":"ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5","balance":"100000000000000"},"wallet_2":{"address":"ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG","balance":"100000000000000"},"wallet_3":{"address":"ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC","balance":"100000000000000"},"wallet_4":{"address":"ST2NEB84ASENDXKYGJPQW86YXQCEFEX2ZQPG87ND","balance":"100000000000000"},"wallet_5":{"address":"ST2REHHS5J3CERCRBEPMGH7921Q6PYKAADT7JP2VB","balance":"100000000000000"},"wallet_6":{"address":"ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0","balance":"100000000000000"},"wallet_7":{"address":"ST3PF13W7Z0RRM42A8VZRVFQ75SV1K26RXEP8YGKJ","balance":"100000000000000"},"wallet_8":{"address":"ST3NBRSFKX28FQ2ZJ1MAKX58HKHSDGNV5N7R21XCP","balance":"100000000000000"}} as const;

export const identifiers = {"wrappedBitcoin":"SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin","commissionTrait":"SP3D6PV2ACBPEKYJTCMH7HEN02KP87QSP8KTEH335.commission-trait","emergencyRules":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.emergency-rules","extDelegateStxPox4":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-delegate-stx-pox-4","extSponsoredSbtcTransfer":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-sponsored-sbtc-transfer","extSponsoredTransfer":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-sponsored-transfer","extTest":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-test","extUnsafeSip010Transfer":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-unsafe-sip010-transfer","extensionTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.extension-trait","ftTrait":"SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.ft-trait","inactiveObserver":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.inactive-observer","microNthng":"SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.micro-nthng","nftTrait":"SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait","noRules":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.no-rules","nope":"SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.nope","ogBitcoinPizzaLeatherEdition":"SP16GEW6P7GBGZG0PXRXFJEMR3TJHJEY2HJKBP1P5.og-bitcoin-pizza-leather-edition","restrictedTokenTrait":"SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.restricted-token-trait","ruleSetTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.rule-set-trait","sbtcDeposit":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-deposit","sbtcRegistry":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-registry","sbtcToken":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token","sip010TraitFtStandard":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard","sip013SemiFungibleTokenTrait":"SPDBEG5X8XD50SPM1JJH0E5CTXGDV5NJTKAKKR5V.sip013-semi-fungible-token-trait","smartWalletEndpoint":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-endpoint","smartWalletStandard":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-standard","smartWalletTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-trait","smartWalletWithRules":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-with-rules","smartWalletWithRulesTrait":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-with-rules-trait","standardRules":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.standard-rules"} as const

export const simnet = {
  accounts,
  contracts,
  identifiers,
} as const;


export const deployments = {"wrappedBitcoin":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.Wrapped-Bitcoin","simnet":"SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin","testnet":"ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.Wrapped-Bitcoin","mainnet":"SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin"},"commissionTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.commission-trait","simnet":"SP3D6PV2ACBPEKYJTCMH7HEN02KP87QSP8KTEH335.commission-trait","testnet":null,"mainnet":"SP3D6PV2ACBPEKYJTCMH7HEN02KP87QSP8KTEH335.commission-trait"},"emergencyRules":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.emergency-rules","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.emergency-rules","testnet":null,"mainnet":null},"extDelegateStxPox4":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-delegate-stx-pox-4","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-delegate-stx-pox-4","testnet":"ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.ext-delegate-stx-pox-4","mainnet":null},"extSponsoredSbtcTransfer":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-sponsored-sbtc-transfer","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-sponsored-sbtc-transfer","testnet":null,"mainnet":null},"extSponsoredTransfer":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-sponsored-transfer","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-sponsored-transfer","testnet":null,"mainnet":null},"extTest":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-test","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-test","testnet":null,"mainnet":null},"extUnsafeSip010Transfer":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-unsafe-sip010-transfer","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ext-unsafe-sip010-transfer","testnet":null,"mainnet":null},"extensionTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.extension-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.extension-trait","testnet":null,"mainnet":null},"ftTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ft-trait","simnet":"SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.ft-trait","testnet":"ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.ft-trait","mainnet":"SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.ft-trait"},"inactiveObserver":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.inactive-observer","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.inactive-observer","testnet":null,"mainnet":null},"microNthng":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.micro-nthng","simnet":"SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.micro-nthng","testnet":null,"mainnet":"SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.micro-nthng"},"nftTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.nft-trait","simnet":"SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait","testnet":"ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.nft-trait","mainnet":"SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait"},"noRules":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.no-rules","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.no-rules","testnet":null,"mainnet":null},"nope":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.nope","simnet":"SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.nope","testnet":null,"mainnet":"SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.nope"},"ogBitcoinPizzaLeatherEdition":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.og-bitcoin-pizza-leather-edition","simnet":"SP16GEW6P7GBGZG0PXRXFJEMR3TJHJEY2HJKBP1P5.og-bitcoin-pizza-leather-edition","testnet":null,"mainnet":"SP16GEW6P7GBGZG0PXRXFJEMR3TJHJEY2HJKBP1P5.og-bitcoin-pizza-leather-edition"},"restrictedTokenTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.restricted-token-trait","simnet":"SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.restricted-token-trait","testnet":"ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.restricted-token-trait","mainnet":"SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.restricted-token-trait"},"ruleSetTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.rule-set-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.rule-set-trait","testnet":null,"mainnet":null},"sbtcDeposit":{"devnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-deposit","simnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-deposit","testnet":null,"mainnet":null},"sbtcRegistry":{"devnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-registry","simnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-registry","testnet":null,"mainnet":null},"sbtcToken":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sbtc-token","simnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token","testnet":null,"mainnet":"SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token"},"sip010TraitFtStandard":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip-010-trait-ft-standard","simnet":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard","testnet":"ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.sip-010-trait-ft-standard","mainnet":"SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard"},"sip013SemiFungibleTokenTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.sip013-semi-fungible-token-trait","simnet":"SPDBEG5X8XD50SPM1JJH0E5CTXGDV5NJTKAKKR5V.sip013-semi-fungible-token-trait","testnet":null,"mainnet":"SPDBEG5X8XD50SPM1JJH0E5CTXGDV5NJTKAKKR5V.sip013-semi-fungible-token-trait"},"smartWalletEndpoint":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-endpoint","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-endpoint","testnet":"ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.smart-wallet-endpoint","mainnet":null},"smartWalletStandard":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-standard","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-standard","testnet":null,"mainnet":null},"smartWalletTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-trait","testnet":null,"mainnet":null},"smartWalletWithRules":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-with-rules","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-with-rules","testnet":null,"mainnet":null},"smartWalletWithRulesTrait":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-with-rules-trait","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.smart-wallet-with-rules-trait","testnet":null,"mainnet":null},"standardRules":{"devnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.standard-rules","simnet":"ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.standard-rules","testnet":null,"mainnet":null}} as const;

export const project = {
  contracts,
  deployments,
} as const;
  