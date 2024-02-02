import { InjectedCVMWallet, InjectedEthereum, InjectedTronWebOWallet, InjectedBitcoin } from '@owallet/provider';
import { init } from './init';

import manifest from '../../manifest.json';

const owallet = new InjectedCVMWallet(manifest.version, 'extension');
const ethereum = new InjectedEthereum(manifest.version, 'extension');
const tronweb = new InjectedTronWebOWallet(manifest.version, 'extension');
const bitcoin = new InjectedBitcoin(manifest.version, 'extension');
init(
  owallet,
  ethereum,
  tronweb,
  bitcoin,
  (chainId: string) => owallet.getOfflineSigner(chainId),
  (chainId: string) => owallet.getOfflineSignerOnlyAmino(chainId),
  (chainId: string) => owallet.getOfflineSignerAuto(chainId),
  (chainId: string) => owallet.getEnigmaUtils(chainId)
);
