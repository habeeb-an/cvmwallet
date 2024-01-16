# CVM Wallet

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/oraichain/owallet/blob/master/LICENSE.txt)
<!-- [![Twitter: OWallet](https://img.shields.io/twitter/follow/oraichain.svg?style=social)](https://twitter.com/oraichain) -->

## CVM Wallet: Wallet for CosVM Network
OWallet supports both Cosmos-based and EVM-based networks including Cosmos Hub, Oraichain, Osmosis, Juno, Ethereum, BSC, and more.
OWallet is developed based on Keplr extension and currently maintained by Oraichain Labs.

## CVM Wallet’s key features
- Support Cosmos-based and EVM-based networks
- Enable IBC transfer
- Improved sending and receiving of CW20 (standard fungible tokens based on Cosmwasm)
- Compatible with Cosmwasm v1

<!-- ## Technical inquiries
- OWallet source code: https://github.com/oraichain/owallet
- Support ticket: https://orai.io/support
<!-- - OWallet website: https://owallet.dev -->
<!-- - Discord https://discord.gg/JNyFnU789b
- You can create a pull request to add your network --> 

## Install
1. Git clone this repo to desired directory

```shell
git clone https://github.com/habeeb-an/cvmwallet.git
```

2. Install required packages

```shell
yarn bootstrap
```
incase not working because of lerna
- Add lerna v7 globally and try ```yarn install ``` from root , then add below packages.
- If the package folder already exists delete it and try again to install the submodule
-if all ready , and if you are trying extension then follow the docs at there

3. Clone packages/background

```shell
git submodule add --force https://github.com/oraichain/owallet-background.git packages/background
```

4. Build it

```shell
yarn build 
or
yarn build:libs
```

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Release
- iOS: https://apps.apple.com/app/owallet/id1626035069
- Android: https://play.google.com/store/apps/details?id=com.io.owallet 
- Chrome extension: https://chrome.google.com/webstore/detail/owallet/hhejbopdnpbjgomhpmegemnjogflenga

## License
```shell
/*
 * Copyright 2022 Oraichain Labs JSC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at

 *      http://www.apache.org/licenses/LICENSE-2.0

 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 
 * The repository (this work) includes work covered by the following copyright and permission notices:
 *
 *    Copyright 2020 Chainapsis, Inc
 *    Licensed under the Apache License, Version 2.0.
 * 
 * NOTICE: The source code branch of Chainapsis Inc. under Apache 2.0 license:
 *  https://github.com/chainapsis/keplr-wallet/tree/0e137373ac4f526caf97b4694de47fe1ba543bd8
 */
```
Full text: [LICENSE.txt](LICENSE.txt)