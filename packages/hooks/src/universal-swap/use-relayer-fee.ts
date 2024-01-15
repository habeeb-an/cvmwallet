import { useEffect, useState } from 'react';
import { CWStargate, fetchRelayerFee, ChainIdEnum } from '@owallet/common';
import { oraichainNetwork } from '@oraichain/oraidex-common';
import { AccountWithAll } from '@owallet/stores';

export const useRelayerFee = (accountAll: AccountWithAll) => {
  const [relayerFee, setRelayerFee] = useState([]);

  const queryRelayerFee = async () => {
    const cwClient = await CWStargate.init(accountAll, ChainIdEnum.Oraichain, oraichainNetwork.rpc);
    const data = await fetchRelayerFee(cwClient);
    setRelayerFee(data);
  };

  useEffect(() => {
    queryRelayerFee();
  }, []);

  return relayerFee;
};
