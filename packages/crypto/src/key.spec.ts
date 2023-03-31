import { Mnemonic } from './mnemonic';
import { PrivKeySecp256k1 } from './key';
import bs58 from 'bs58';
import { Hash } from './hash';
import { Address } from './address';

describe('Test priv key', () => {
  it('priv key should generate the valid pub key', () => {
    const mnemonic =
      'celery husband drama unaware blue empower jelly twist program say prepare page';

    const privKey = new PrivKeySecp256k1(
      Mnemonic.generateWalletFromMnemonic(mnemonic)
    );

    const pubKey = privKey.getPubKey();

    expect(pubKey.toBytes()).toStrictEqual(
      new Uint8Array([
        2, 57, 75, 197, 54, 51, 54, 106, 42, 185, 181, 214, 151, 169, 76, 140,
        1, 33, 204, 94, 63, 13, 85, 74, 99, 22, 126, 219, 49, 140, 234, 232, 188
      ])
    );
  });

  it('base58 address', () => {
    const evmAddress = '0x993d06fc97f45f16e4805883b98a6c20bab54964';
    const tronAddress = 'TPwTVfDDvmWSawsP7Ki1t3ecSBmaFeMMXc';

    expect(Address.getEvmAddress(tronAddress)).toEqual(evmAddress);
    expect(Address.getBase58Address(evmAddress)).toEqual(tronAddress);
  });
});
