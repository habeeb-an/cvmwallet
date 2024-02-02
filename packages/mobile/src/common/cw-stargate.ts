import * as cosmwasm from '@cosmjs/cosmwasm-stargate';
export class CWStargate {
  static async init(account: any, chainId: string, rpc: string) {
    const owallet = await account.getCVMWallet();
    if (!owallet) {
      throw new Error("Can't get the cvmwallet API");
    }
    const wallet = owallet.getOfflineSigner(chainId);

    const client = await cosmwasm.SigningCosmWasmClient.connectWithSigner(
      rpc,
      wallet
    );
    return client;
  }
}
