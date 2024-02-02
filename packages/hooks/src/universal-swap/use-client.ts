import { CWStargate, ChainIdEnum } from '@owallet/common';
import { walletChainNetwork } from '@oraichain/oraidex-common';
import { useEffect, useState } from 'react';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { AccountWithAll } from '@owallet/stores';

export const useClient = (accountAll: AccountWithAll) => {
  const [client, setClient] = useState<SigningCosmWasmClient>();

  const getClient = async () => {
    const cwClient = await CWStargate.init(accountAll, ChainIdEnum.CosVM, walletChainNetwork.rpc);
    setClient(cwClient);
  };

  useEffect(() => {
    getClient();
  }, []);

  return client;
};
