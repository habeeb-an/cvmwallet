import { SecretUtils } from 'secretjs/types/enigmautils';
import { CVMWallet } from '@owallet/types';

/**
 * CVMWalletEnigmaUtils duplicates the public methods that are supported on secretjs's EnigmaUtils class.
 */
export class CVMWalletEnigmaUtils implements SecretUtils {
  constructor(
    protected readonly chainId: string,
    protected readonly owallet: CVMWallet
  ) {}

  async getPubkey(): Promise<Uint8Array> {
    return await this.owallet.getEnigmaPubKey(this.chainId);
  }

  async getTxEncryptionKey(nonce: Uint8Array): Promise<Uint8Array> {
    return await this.owallet.getEnigmaTxEncryptionKey(this.chainId, nonce);
  }

  async encrypt(
    contractCodeHash: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    msg: object
  ): Promise<Uint8Array> {
    return await this.owallet.enigmaEncrypt(
      this.chainId,
      contractCodeHash,
      msg
    );
  }

  async decrypt(
    ciphertext: Uint8Array,
    nonce: Uint8Array
  ): Promise<Uint8Array> {
    return await this.owallet.enigmaDecrypt(this.chainId, ciphertext, nonce);
  }
}
