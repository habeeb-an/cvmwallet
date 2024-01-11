import * as cosmwasm from '@cosmjs/cosmwasm-stargate';
import { RPC_COSVM } from '../pages/nft/types';

export const getClientQuery = async (rpc = RPC_COSVM) => {
  return await cosmwasm.CosmWasmClient.connect(rpc);
};
