import { CWStargate, fetchTaxRate, ChainIdEnum } from '@owallet/common';
import { walletChainNetwork } from '@oraichain/oraidex-common';
import { useEffect, useState } from 'react';
import { AccountWithAll } from '@owallet/stores';

export const useTaxRate = (accountAll: AccountWithAll) => {
  const [taxRate, setTaxRate] = useState('');

  const queryTaxRate = async () => {
    const cwClient = await CWStargate.init(accountAll, ChainIdEnum.CosVM, walletChainNetwork.rpc);
    const data = await fetchTaxRate(cwClient);
    setTaxRate(data?.rate);
  };

  useEffect(() => {
    queryTaxRate();
  }, []);

  return taxRate;
};
