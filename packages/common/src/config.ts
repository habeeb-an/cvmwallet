import { Bech32Address } from '@owallet/cosmos';
import { AppChainInfo } from '@owallet/types';
import { IntlMessages, TypeLanguageToFiatCurrency } from './languages';
import { FiatCurrency } from '@owallet/types';

export const AutoFetchingFiatValueInterval = 300 * 1000; // 5min

export const AutoFetchingAssetsInterval = 15 * 1000; // 15sec

export const FiatCurrencies: FiatCurrency[] = [
  {
    currency: 'usd',
    symbol: '$',
    maxDecimals: 2,
    locale: 'en-US'
  },
  {
    currency: 'eur',
    symbol: '€',
    maxDecimals: 2,
    locale: 'de-DE'
  },
  {
    currency: 'gbp',
    symbol: '£',
    maxDecimals: 2,
    locale: 'en-GB'
  },
  {
    currency: 'cad',
    symbol: 'CA$',
    maxDecimals: 2,
    locale: 'en-CA'
  },
  {
    currency: 'aud',
    symbol: 'AU$',
    maxDecimals: 2,
    locale: 'en-AU'
  },
  {
    currency: 'rub',
    symbol: '₽',
    maxDecimals: 0,
    locale: 'ru'
  },
  {
    currency: 'krw',
    symbol: '₩',
    maxDecimals: 0,
    locale: 'ko-KR'
  },
  {
    currency: 'hkd',
    symbol: 'HK$',
    maxDecimals: 1,
    locale: 'en-HK'
  },
  {
    currency: 'cny',
    symbol: '¥',
    maxDecimals: 1,
    locale: 'zh-CN'
  },
  {
    currency: 'jpy',
    symbol: '¥',
    maxDecimals: 0,
    locale: 'ja-JP'
  },
  {
    currency: 'inr',
    symbol: '₹',
    maxDecimals: 1,
    locale: 'en-IN'
  }
];

export const LanguageToFiatCurrency: TypeLanguageToFiatCurrency = {
  default: 'usd',
  ko: 'krw',
  vi: 'vnd'
};

export const AdditonalIntlMessages: IntlMessages = {};

// coingecko api for both evm and cosmos based networks
export const CoinGeckoAPIEndPoint = 'https://api.coingecko.com/api/v3';
// export const CoinGeckoAPIEndPoint = 'https://price.market.orai.io';

//jan172024
// USING THIS API KEY AFTER /V3/{...} in x_api_key directly
// we may need to change this infura api by creating account
// export const EthereumEndpoint = 'https://mainnet.infura.io/v3/eeb00e81cdb2410098d5a270eff9b341';
export const EthereumEndpoint = 'https://mainnet.infura.io/v3/9c77cac4af7e4dd1be3240f78cac46df'; //it is mine hb

export const CoinGeckoGetPrice = '/simple/price';

// default networks
export const EmbedChainInfos: AppChainInfo[] = [
  // {
  //   rest: 'https://bsc-dataseed1.ninicoin.io',
  //   chainId: '0x38',
  //   chainName: 'BNB Chain',
  //   bip44: {
  //     coinType: 60
  //   },
  //   coinType: 60,
  //   stakeCurrency: {
  //     coinDenom: 'BNB',
  //     coinMinimalDenom: 'bnb',
  //     coinDecimals: 18,
  //     coinGeckoId: 'binancecoin',
  //     coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  //     gasPriceStep: {
  //       low: 10000000000,
  //       average: 25000000000,
  //       high: 40000000000
  //     }
  //   },
  //   bech32Config: Bech32Address.defaultBech32Config('evmos'),
  //   networkType: 'evm',
  //   currencies: [
  //     {
  //       coinDenom: 'BNB',
  //       coinMinimalDenom: 'bnb',
  //       coinDecimals: 18,
  //       coinGeckoId: 'binancecoin',
  //       coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
  //     },
  //     {
  //       coinDenom: 'AIRI',
  //       coinMinimalDenom: 'erc20:0x7e2a35c746f2f7c240b664f1da4dd100141ae71f:aiRight Token',
  //       coinDecimals: 18,
  //       coinGeckoId: 'airight',
  //       coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11563.png'
  //     },
  //       coinDenom: 'USDT',
  //       coinMinimalDenom: 'erc20:0x55d398326f99059fF775485246999027B3197955:Tether',
  //       coinDecimals: 18,
  //       coinGeckoId: 'tether',
  //       coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
  //     }
  //   ],
  //   get feeCurrencies() {
  //     return [this.stakeCurrency];
  //   },

  //   features: ['ibc-go', 'stargate', 'isEvm'],
  //   txExplorer: {
  //     name: 'Bsc Scan',
  //     txUrl: 'https://bscscan.com/tx/${txHash}',
  //     accountUrl: 'https://bscscan.com/address/{address}'
  //   }
  // },
  //cosvm chain

  // {
  //   rest: 'https://rpc.cosvm.net/',
  //   chainId: '323',
  //   chainName: 'CosVM',
  //   bip44: {
  //     coinType: 60
  //   },
  //   coinType: 60,
  //   stakeCurrency: {
  //     coinDenom: 'CVM',
  //     coinMinimalDenom: 'ucvm',
  //     coinDecimals: 18,
  //     coinGeckoId: 'ucvm',
  //     coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/acvm.png',
  //     gasPriceStep: {
  //       low: 80000000000,
  //       average: 80000000000,
  //       high: 80000000000
  //     }
  //   },
  //   networkType: 'evm',
  //   bech32Config: Bech32Address.defaultBech32Config('cvm'),

  //   currencies: [
  //     {
  //       coinDenom: 'CVM',
  //       coinMinimalDenom: 'ucvm',
  //       coinDecimals: 18,
  //       coinGeckoId: 'ucvm',
  //       coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/acvm.png'
  //     }
  //   ],
  //   get feeCurrencies() {
  //     return [this.stakeCurrency];
  //   },

  //   features: ['ibc-go', 'stargate', 'isEvm']
  // },

  // {
  //   rest: 'https://rpc.cosvm.net/',
  //   chainId: '323',
  //   networkType: 'evm',
  //   coinType: 60,
  //   chainName: 'CosVM',
  //   stakeCurrency: {
  //     coinDenom: 'CVM',
  //     coinMinimalDenom: 'ucvm',
  //     coinDecimals: 18,
  //     coinGeckoId: 'ucvm',
  //     coinImageUrl: ''
  //   },
  //   bip44: {
  //     coinType: 60
  //   },
  //   bech32Config: Bech32Address.defaultBech32Config('cvm'),
  //   currencies: [
  //     {
  //       coinDenom: 'CVM',
  //       coinMinimalDenom: 'ucvm',
  //       coinDecimals: 18,
  //       coinGeckoId: 'ucvm',
  //       coinImageUrl: ''
  //     }
  //   ],
  //   get feeCurrencies() {
  //     return [this.stakeCurrency];
  //   },

  //   gasPriceStep: {
  //     low: 80000000000,
  //     average: 80000000000,
  //     high: 80000000000
  //   },
  //   features: ['ibc-go', 'stargate', 'isEvm']
  // },

  {
    rpc: 'https://cvm.cosvm.net/',
    rest: 'https://api.cosvm.net/',
    chainId: 'cvm_323-1',
    coinType: 60,
    chainName: 'CosVM',
    networkType: 'cosmos',
    stakeCurrency: {
      coinDenom: 'CVM',
      coinMinimalDenom: 'ucvm',
      coinDecimals: 18,
      coinGeckoId: 'ucvm',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/chain.png'
    },
    bip44: {
      coinType: 60
    },
    bech32Config: Bech32Address.defaultBech32Config('cvm'),
    get currencies() {
      return [this.stakeCurrency];
    },
    get feeCurrencies() {
      return [this.stakeCurrency];
    },
    gasPriceStep: {
      low: 0,
      average: 25e-6,
      high: 4e-5
    },
    features: ['stargate', 'ibc-transfer', 'cosmwasm', 'no-legacy-stdTx']
  },
  // {
  //   rpc: 'https://rpc.orai.io',
  //   rest: 'https://lcd.orai.io',
  //   chainId: 'Oraichain',
  //   chainName: 'Oraichain',
  //   networkType: 'cosmos',
  //   stakeCurrency: {
  //     coinDenom: 'ORAI',
  //     coinMinimalDenom: 'orai',
  //     coinDecimals: 6,
  //     coinGeckoId: 'oraichain-token',
  //     coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
  //     gasPriceStep: {
  //       low: 0.003,
  //       average: 0.005,
  //       high: 0.007
  //     }
  //   },
  //   bip44: {
  //     coinType: 118
  //   },
  //   coinType: 118,
  //   bech32Config: Bech32Address.defaultBech32Config('orai'),
  //   get currencies() {
  //     return [
  //       this.stakeCurrency,
  //       {
  //         type: 'cw20',
  //         coinDenom: 'AIRI',
  //         coinMinimalDenom: 'cw20:orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg:aiRight Token',
  //         contractAddress: 'orai10ldgzued6zjp0mkqwsv2mux3ml50l97c74x8sg',
  //         coinDecimals: 6,
  //         coinGeckoId: 'airight',
  //         coinImageUrl: 'https://i.ibb.co/m8mCyMr/airi.png'
  //       },
  //       {
  //         type: 'cw20',
  //         coinDenom: 'ORAIX',
  //         coinMinimalDenom: 'cw20:orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge:OraiDex Token',
  //         contractAddress: 'orai1lus0f0rhx8s03gdllx2n6vhkmf0536dv57wfge',
  //         coinDecimals: 6,
  //         coinGeckoId: 'oraidex',
  //         coinImageUrl: 'https://i.ibb.co/VmMJtf7/oraix.png'
  //       },
  //       {
  //         type: 'cw20',
  //         coinDenom: 'USDT',
  //         coinMinimalDenom: 'cw20:orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh:Tether',
  //         contractAddress: 'orai12hzjxfh77wl572gdzct2fxv2arxcwh6gykc7qh',
  //         coinDecimals: 6,
  //         coinGeckoId: 'tether',
  //         coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
  //       },
  //       {
  //         type: 'cw20',
  //         coinDenom: 'USDC',
  //         coinMinimalDenom: 'cw20:orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd:USDC',
  //         contractAddress: 'orai15un8msx3n5zf9ahlxmfeqd2kwa5wm0nrpxer304m9nd5q6qq0g6sku5pdd',
  //         coinDecimals: 6,
  //         coinGeckoId: 'usd-coin',
  //         coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png'
  //       },
  //       {
  //         type: 'cw20',
  //         coinDenom: 'wTRX',
  //         coinMinimalDenom: 'cw20:orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0:wTRX',
  //         contractAddress: 'orai1c7tpjenafvgjtgm9aqwm7afnke6c56hpdms8jc6md40xs3ugd0es5encn0',
  //         coinDecimals: 6,
  //         coinGeckoId: 'tron',
  //         coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png'
  //       },
  //     ];
  //   },
  //   get feeCurrencies() {
  //     return [this.stakeCurrency];
  //   },
  //   features: ['stargate', 'ibc-transfer', 'cosmwasm', 'no-legacy-stdTx'],
  //   chainSymbolImageUrl: 'https://orai.io/images/logos/logomark-dark.png',
  //   txExplorer: {
  //     name: 'Oraiscan',
  //     txUrl: 'https://scan.orai.io/txs/{txHash}',
  //     accountUrl: 'https://scan.orai.io/account/{address}'
  //   }
  //   // beta: true // use v1beta1
  // },

  // {
  //   rpc: 'https://injective-rpc-global.orai.io',
  //   rest: 'https://sentry.lcd.injective.network',
  //   chainId: 'injective-1',
  //   chainName: 'Injective',
  //   networkType: 'cosmos',
  //   stakeCurrency: {
  //     coinDenom: 'INJ',
  //     coinMinimalDenom: 'inj',
  //     coinDecimals: 18,
  //     coinGeckoId: 'injective-protocol',
  //     coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png',
  //     gasPriceStep: {
  //       low: 5000000000,
  //       average: 25000000000,
  //       high: 50000000000
  //     }
  //   },
  //   bip44: {
  //     coinType: 60
  //   },
  //   gasPriceStep: {
  //     low: 5000000000,
  //     average: 25000000000,
  //     high: 50000000000
  //   },
  //   coinType: 60,
  //   bech32Config: Bech32Address.defaultBech32Config('inj'),
  //   get currencies() {
  //     return [this.stakeCurrency];
  //   },
  //   get feeCurrencies() {
  //     return [this.stakeCurrency];
  //   },
  //   features: ['no-legacy-stdTx', 'ibc-transfer', 'ibc-go', 'eth-key-sign'],
  //   chainSymbolImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png',
  //   txExplorer: {
  //     name: 'Injective',
  //     txUrl: 'https://explorer.injective.network/transaction/{txHash}'
  //   },
  //   beta: true
  // },

  // {
  //   chainId: 'oraibridge-subnet-2',
  //   chainName: 'OraiBridge',
  //   rpc: 'https://bridge-v2.rpc.orai.io',
  //   rest: 'https://bridge-v2.lcd.orai.io',
  //   networkType: 'cosmos',
  //   stakeCurrency: {
  //     coinDenom: 'ORAIB',
  //     coinMinimalDenom: 'uoraib',
  //     coinDecimals: 6,
  //     gasPriceStep: {
  //       low: 0,
  //       average: 0,
  //       high: 0
  //     }
  //   },
  //   bip44: {
  //     coinType: 118
  //   },
  //   coinType: 118,
  //   bech32Config: Bech32Address.defaultBech32Config('oraib'),
  //   // List of all coin/tokens used in this chain.
  //   get currencies() {
  //     return [
  //       this.stakeCurrency,
  //       {
  //         coinDenom: 'BEP20 ORAI',
  //         coinMinimalDenom: 'oraib0xA325Ad6D9c92B55A3Fc5aD7e412B1518F96441C0',
  //         coinDecimals: 18,
  //         coinGeckoId: 'oraichain-token',
  //         coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7533.png'
  //       },
  //       {
  //         coinDenom: 'BEP20 AIRI',
  //         coinMinimalDenom: 'oraib0x7e2A35C746F2f7C240B664F1Da4DD100141AE71F',
  //         coinDecimals: 18,
  //         coinGeckoId: 'airight',
  //         coinImageUrl: 'https://i.ibb.co/m8mCyMr/airi.png'
  //       },
  //       {
  //         coinDenom: 'BEP20 MILKY',
  //         coinMinimalDenom: 'oraib0x6fE3d0F096FC932A905accd1EB1783F6e4cEc717',
  //         coinDecimals: 18,
  //         coinGeckoId: 'milky-token',
  //         coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14418.png'
  //       },
  //       {
  //         coinDenom: 'BEP20 MILKY',
  //         coinMinimalDenom: 'oraib0x6fE3d0F096FC932A905accd1EB1783F6e4cEc717',
  //         coinDecimals: 18,
  //         coinGeckoId: 'milky-token',
  //         coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14418.png'
  //       },
  //       {
  //         coinDenom: 'BEP20 USDT',
  //         coinMinimalDenom: 'oraib0x55d398326f99059fF775485246999027B3197955',
  //         coinDecimals: 18,
  //         coinGeckoId: 'tether',
  //         coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
  //       }
  //     ];
  //   },
  //   get feeCurrencies() {
  //     return [this.stakeCurrency];
  //   },
  //   features: ['stargate', 'ibc-transfer', 'cosmwasm']
  // },

  // {
  //   rpc: 'https://rpc-cosmos.oraidex.io',
  //   rest: 'https://lcd-cosmos.oraidex.io',
  //   chainId: 'cosmoshub-4',
  //   chainName: 'Cosmos Hub',
  //   networkType: 'cosmos',
  //   stakeCurrency: {
  //     coinDenom: 'ATOM',
  //     coinMinimalDenom: 'uatom',
  //     coinDecimals: 6,
  //     coinGeckoId: 'cosmos',
  //     coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/atom.png',
  //     gasPriceStep: {
  //       low: 0,
  //       average: 0.025,
  //       high: 0.04
  //     }
  //   },
  //   bip44: {
  //     coinType: 118
  //   },
  //   bech32Config: Bech32Address.defaultBech32Config('cosmos'),
  //   currencies: [
  //     {
  //       coinDenom: 'ATOM',
  //       coinMinimalDenom: 'uatom',
  //       coinDecimals: 6,
  //       coinGeckoId: 'cosmos',
  //       coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/atom.png'
  //     }
  //   ],
  //   get feeCurrencies() {
  //     return [this.stakeCurrency];
  //   },
  //   coinType: 118,
  //   features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  //   chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/atom.png',
  //   txExplorer: {
  //     name: 'Mintscan',
  //     txUrl: 'https://www.mintscan.io/cosmos/txs/{txHash}'
  //   }
  // },

  // {
  //   chainId: 'nomic-testnet-4d',
  //   chainName: 'Nomic Testnet 4d',
  //   rpc: 'https://testnet-rpc.nomic.io:2096',
  //   rest: 'https://testnet-api.nomic.io:8443',
  //   networkType: 'cosmos',
  //   bip44: {
  //     coinType: 118
  //   },
  //   bech32Config: {
  //     bech32PrefixAccAddr: 'nomic',
  //     bech32PrefixAccPub: 'nomicpub',
  //     bech32PrefixValAddr: 'nomicvaloper',
  //     bech32PrefixValPub: 'nomicvaloperpub',
  //     bech32PrefixConsAddr: 'nomicvalcons',
  //     bech32PrefixConsPub: 'nomicvalconspub'
  //   },
  //   currencies: [
  //     {
  //       coinDenom: 'NOM',
  //       coinMinimalDenom: 'unom',
  //       coinDecimals: 6,
  //       coinImageUrl: 'https://i.ibb.co/X4gbpMG/download-removebg-preview-1.png'
  //     },
  //     {
  //       coinDenom: 'nBTC',
  //       coinMinimalDenom: 'uSAT',
  //       coinDecimals: 14,
  //       coinGeckoId: 'bitcoin',
  //       coinImageUrl: 'https://i.ibb.co/NVP6CDZ/images-removebg-preview.png'
  //     }
  //   ],
  //   feeCurrencies: [
  //     {
  //       coinDenom: 'NOM',
  //       coinMinimalDenom: 'unom',
  //       coinDecimals: 6,
  //       coinImageUrl: 'https://i.ibb.co/X4gbpMG/download-removebg-preview-1.png',
  //       gasPriceStep: {
  //         low: 0,
  //         average: 0,
  //         high: 0
  //       }
  //     }
  //   ],
  //   stakeCurrency: {
  //     coinDenom: 'NOM',
  //     coinMinimalDenom: 'unom',
  //     coinDecimals: 6,
  //     coinImageUrl: 'https://i.ibb.co/X4gbpMG/download-removebg-preview-1.png'
  //   },
  //   coinType: 119,
  //   features: ['stargate'],
  //   beta: true
  // },
  // {
  //   rpc: 'https://rpc-juno.keplr.app',
  //   rest: 'https://lcd-juno.keplr.app',
  //   chainId: 'juno-1',
  //   chainName: 'Juno',
  //   networkType: 'cosmos',
  //   stakeCurrency: {
  //     coinDenom: 'JUNO',
  //     coinMinimalDenom: 'ujuno',
  //     coinDecimals: 6,
  //     coinGeckoId: 'juno-network',
  //     coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/juno.png',
  //     gasPriceStep: {
  //       low: 0.001,
  //       average: 0.0025,
  //       high: 0.004
  //     }
  //   },
  //   bip44: {
  //     coinType: 118
  //   },
  //   bech32Config: Bech32Address.defaultBech32Config('juno'),
  //   currencies: [
  //     {
  //       coinDenom: 'JUNO',
  //       coinMinimalDenom: 'ujuno',
  //       coinDecimals: 6,
  //       coinGeckoId: 'juno-network',
  //       coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/juno.png'
  //     }
  //   ],
  //   get feeCurrencies() {
  //     return [this.stakeCurrency];
  //   },
  //   features: ['stargate', 'no-legacy-stdTx', 'cosmwasm', 'ibc-transfer', 'ibc-go'],
  //   chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/juno.png',
  //   txExplorer: {
  //     name: 'Mintscan',
  //     txUrl: 'https://www.mintscan.io/juno/txs/{txHash}'
  //   }
  // },

  {
    rest: 'https://api.blockcypher.com/v1/btc/test3',
    chainId: 'bitcoinTestnet',
    chainName: 'Bitcoin-Segwit Testnet',
    bip44: {
      coinType: 1
    },
    coinType: 1,
    stakeCurrency: {
      coinDenom: 'BTC',
      coinMinimalDenom: 'btc',
      coinDecimals: 8,
      coinGeckoId: 'bitcoin',
      coinImageUrl: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
      gasPriceStep: {
        low: 1,
        average: 15,
        high: 22
      }
    },
    bech32Config: Bech32Address.defaultBech32Config('tb'),
    networkType: 'bitcoin',
    currencies: [
      {
        coinDenom: 'BTC',
        coinMinimalDenom: 'btc',
        coinDecimals: 8,
        coinGeckoId: 'bitcoin',
        coinImageUrl: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png'
      }
    ],
    get feeCurrencies() {
      return this.currencies;
    },
    features: ['isBtc'],
    txExplorer: {
      name: 'Blockcypher',
      txUrl: 'https://live.blockcypher.com/btc-testnet/tx/{txHash}',
      accountUrl: 'https://live.blockcypher.com/btc-testnet/address/{address}'
    }
  },
  // {
  //   rest: 'https://api.blockcypher.com/v1/btc/main',
  //   chainId: 'bitcoin',
  //   chainName: 'Bitcoin',
  //   bip44: {
  //     coinType: 0
  //   },
  //   coinType: 0,
  //   stakeCurrency: {
  //     coinDenom: 'BTC',
  //     coinMinimalDenom: 'btc',
  //     coinDecimals: 8,
  //     coinGeckoId: 'bitcoin',
  //     coinImageUrl: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
  //     gasPriceStep: {
  //       low: 1,
  //       average: 15,
  //       high: 22
  //     }
  //   },
  //   bech32Config: Bech32Address.defaultBech32Config('bc'),
  //   networkType: 'bitcoin',
  //   currencies: [
  //     {
  //       coinDenom: 'BTC',
  //       coinMinimalDenom: 'btc',
  //       coinDecimals: 8,
  //       coinGeckoId: 'bitcoin',
  //       coinImageUrl: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png'
  //     }
  //   ],
  //   get feeCurrencies() {
  //     return this.currencies;
  //   },

  //   features: ['isBtc'],
  //   txExplorer: {
  //     name: 'Bitcoin',
  //     txUrl: 'https://live.blockcypher.com/btc/tx/{txHash}',
  //     accountUrl: 'https://live.blockcypher.com/btc/address/{address}'
  //   }
  // },

  {
    rest: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    evmRpc: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    chainId: '0x61',
    chainName: 'BNB Chain Testnet',
    bip44: {
      coinType: 60
    },
    coinType: 60,
    stakeCurrency: {
      coinDenom: 'BNB',
      coinMinimalDenom: 'bnb',
      coinDecimals: 18,
      coinGeckoId: 'binancecoin',
      coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
      gasPriceStep: {
        low: 10000000000,
        average: 25000000000,
        high: 40000000000
      }
    },
    bech32Config: Bech32Address.defaultBech32Config('evmos'),
    networkType: 'evm',
    currencies: [
      {
        coinDenom: 'BNB',
        coinMinimalDenom: 'bnb',
        coinDecimals: 18,
        coinGeckoId: 'binancecoin',
        coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
      },
      {
        coinDenom: 'AIRI',
        coinMinimalDenom: 'erc20:0x7e2a35c746f2f7c240b664f1da4dd100141ae71f:aiRight Token',
        coinDecimals: 18,
        coinGeckoId: 'airight',
        coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11563.png'
      }
    ],
    get feeCurrencies() {
      return [this.stakeCurrency];
    },
    features: ['isEvm'],
    txExplorer: {
      name: 'Bsc Scan Testnet',
      txUrl: 'https://testnet.bscscan.com/tx/{txHash}',
      accountUrl: 'https://testnet.bscscan.com/address/{address}'
    }
  },
  // {
  //   rest: 'https://rpc.ankr.com/eth',
  //   chainId: '0x01',
  //   chainName: 'Ethereum',
  //   bip44: {
  //     coinType: 60
  //   },
  //   coinType: 60,
  //   stakeCurrency: {
  //     coinDenom: 'ETH',
  //     coinMinimalDenom: 'eth',
  //     coinDecimals: 18,
  //     coinGeckoId: 'ethereum',
  //     coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  //     gasPriceStep: {
  //       low: 10000000000,
  //       average: 25000000000,
  //       high: 40000000000
  //     }
  //   },
  //   bech32Config: Bech32Address.defaultBech32Config('evmos'),
  //   networkType: 'evm',
  //   currencies: [
  //     {
  //       coinDenom: 'ETH',
  //       coinMinimalDenom: 'eth',
  //       coinDecimals: 18,
  //       coinGeckoId: 'ethereum',
  //       coinImageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
  //     }
  //   ],
  //   get feeCurrencies() {
  //     return [this.stakeCurrency];
  //   },

  //   features: ['ibc-go', 'stargate', 'isEvm']
  // }

  {
    rest: 'https://rpc.cosvm.net/',
    chainId: '323',
    chainName: 'CosVM',
    bip44: {
      coinType: 60
    },
    coinType: 60,
    stakeCurrency: {
      coinDenom: 'CVM',
      coinMinimalDenom: 'ucvm',
      coinDecimals: 18,
      coinGeckoId: 'ucvm',
      coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/acvm.png',
      gasPriceStep: {
        low: 80000000000,
        average: 80000000000,
        high: 80000000000
      }
    },
    // bech32Config: {
    //   bech32PrefixAccAddr: 'evmos',
    //   bech32PrefixAccPub: 'evmospub',
    //   bech32PrefixValAddr: 'evmosvaloper',
    //   bech32PrefixValPub: 'evmosvaloperpub',
    //   bech32PrefixConsAddr: 'evmosvalcons',
    //   bech32PrefixConsPub: 'evmosvalconspub'
    // },
    bech32Config: Bech32Address.defaultBech32Config('cvm'),
    networkType: 'evm',
    currencies: [
      {
        coinDenom: 'CVM',
        coinMinimalDenom: 'ucvm',
        coinDecimals: 18,
        coinGeckoId: 'ucvm',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/acvm.png'
      }
    ],
    get feeCurrencies() {
      return [this.stakeCurrency];
    },

    features: ['ibc-go', 'stargate', 'isEvm'],
    chainSymbolImageUrl:
      'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cvm_323/acvm.png',
    txExplorer: {
      name: 'Cosvm explorer',
      txUrl: 'https://explorer.cosvm.net/transactions/{txHash}',
      accountUrl: 'https://explorer.cosvm.net/address/{address}'
    }
  }
];

// The origins that are able to pass any permission that external webpages can have.
export const PrivilegedOrigins: string[] = [];

// tracking ads
export const AmplitudeApiKey = '';

// default thumbnails for fix address
export const ValidatorThumbnails: { [key: string]: string } = {};
