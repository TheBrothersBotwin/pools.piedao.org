import { getTokenImage, formatFiat } from '../components/helpers.js';

const incentivizedPools = [
  {
    id: 0,
    addressTokenToStake: '0xFAE2809935233d4BfE8a56c2355c4A2e7d1fFf1A',
    addressUniPoll: '0xB9a4Bca06F14A982fcD14907D31DFACaDC8ff88E',
    aprEnabled: true,
    deprecated: false,
    poolLink: 'https://pools.balancer.exchange/#/pool/0xfae2809935233d4bfe8a56c2355c4a2e7d1fff1a/',
    name: 'DOUGH / ETH',
    weights: '80/20',
    platform: '⚖️ Balancer',
    description: 'WEEKLY REWARDS',
    rewards_token: 'DOUGH',
    weeklyRewards: formatFiat(90000, ',', '.', ''),
    apy: 1.8,
    toStakeSymbol: 'BPT',
    toStakeDesc: 'Balancer: DOUGH/ETH 80/20',
    allowance: 0,
    type: 'Balancer',
    contractType: 'UniPool',
    containing: [
      {
        symbol: 'DOUGH',
        address: '0xad32A8e6220741182940c5aBF610bDE99E737b2D',
        balance: '0',
        icon: getTokenImage('0xad32A8e6220741182940c5aBF610bDE99E737b2D'),
      },
      {
        symbol: 'ETH',
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        balance: '0',
        icon: getTokenImage('eth'),
      },
    ],
    allowanceKey: '',
    highlight: true,
    needAllowance: true,
    enabled: true,
  },
  {
    id: 1,
    addressTokenToStake: '0xFAE2809935233d4BfE8a56c2355c4A2e7d1fFf1A',
    addressUniPoll: '0x8314337d2b13e1A61EadF0FD1686b2134D43762F',
    aprEnabled: true,
    deprecated: true,
    poolLink: 'https://pools.balancer.exchange/#/pool/0xfae2809935233d4bfe8a56c2355c4a2e7d1fff1a/',
    name: 'DOUGH / ETH',
    platform: '⚖️ Balancer',
    description: 'End in Sat 31st, 7pm UTC',
    rewards_token: 'DOUGH',
    weeklyRewards: formatFiat(90000, ',', '.', ''),
    apy: 1.8,
    toStakeSymbol: 'BPT',
    toStakeDesc: 'Balancer: DOUGH/ETH 80/20',
    allowance: 0,
    type: 'Balancer',
    contractType: 'UniPool',
    containing: [
      {
        symbol: 'DOUGH',
        address: '0xad32A8e6220741182940c5aBF610bDE99E737b2D',
        balance: '0',
        icon: getTokenImage('0xad32A8e6220741182940c5aBF610bDE99E737b2D'),
      },
      {
        symbol: 'ETH',
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        balance: '0',
        icon: getTokenImage('eth'),
      },
    ],
    allowanceKey: '',
    highlight: false,
    needAllowance: true,
    enabled: true,
  },
  {
    id: 2,
    addressTokenToStake: '0x8D1ce361eb68e9E05573443C407D4A3Bed23B033',
    addressUniPoll: '0x59706D38F1452F387563f06b632af7302456fE66',
    aprEnabled: true,
    deprecated: false,
    weights: '100%',
    poolLink: '#/pools/0x8d1ce361eb68e9e05573443c407d4a3bed23b033',
    name: 'DEFI++',
    sortFactor: 10,
    description: 'WEEKLY REWARDS (Escrowed)',
    platform: '🥧 PieDAO',
    rewards_token: 'DOUGH',
    weeklyRewards: formatFiat(20000, ',', '.', ''),
    apy: 1.8,
    toStakeSymbol: 'DEFI++',
    toStakeDesc: 'DEFI++ Index',
    allowance: 0,
    type: 'PieDAO',
    contractType: 'UniPool',
    containing: [
      {
        symbol: 'DEFI++',
        address: '0x8D1ce361eb68e9E05573443C407D4A3Bed23B033',
        balance: '0',
        icon: getTokenImage('0x8d1ce361eb68e9e05573443c407d4a3bed23b033'),
      },
    ],
    allowanceKey: '',
    highlight: false,
    needAllowance: true,
    enabled: true,
  },
  {
    addressTokenToStake: '0x35333CF3Db8e334384EC6D2ea446DA6e445701dF',
    aprEnabled: true,
    deprecated: false,
    addressUniPoll: '0x220f25C2105a65425913FE0CF38e7699E3992B97',
    poolLink: 'https://pools.balancer.exchange/#/pool/0x35333cf3db8e334384ec6d2ea446da6e445701df/',
    name: 'DEFI+S / ETH',
    id: 3,
    weights: '70/30',
    type: 'Balancer',
    contractType: 'UniPool',
    containing: [
      {
        symbol: 'DEFI+S',
        address: '0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c',
        balance: '0',
        icon: getTokenImage('0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c'),
      },
      {
        symbol: 'ETH',
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        balance: '0',
        icon: getTokenImage('eth'),
      },
    ],
    rewards_token: 'DOUGH',
    toStakeSymbol: 'BPT',
    toStakeDesc: 'Balancer: DEFI+S/ETH 70/30',
    platform: '⚖️ Balancer',
    description: 'WEEKLY REWARDS',
    weeklyRewards: formatFiat(20000, ',', '.', ''),
    apy: 1.8,
    allowance: 0,
    allowanceKey: '',
    needAllowance: true,
    enabled: true,
  },
  {
    addressTokenToStake: '0xa795600590a7da0057469049ab8f1284baed977e',
    aprEnabled: false,
    deprecated: false,
    addressUniPoll: '0xb3c2b0056627cc1dc148d8fc29f5abdf4dd837bc',
    poolLink: 'https://pools.balancer.exchange/#/pool/0xa795600590a7da0057469049ab8f1284baed977e/',
    name: 'DEFI+L/ETH',
    id: 4,
    weights: '70/30',
    type: 'Balancer',
    contractType: 'Geyser',
    containing: [
      {
        symbol: 'DEFI+L',
        address: '0x78f225869c08d478c34e5f645d07a87d3fe8eb78',
        balance: '0',
        icon: getTokenImage('0x78f225869c08d478c34e5f645d07a87d3fe8eb78'),
      },
      {
        symbol: 'ETH',
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        balance: '0',
        icon: getTokenImage('eth'),
      },
    ],
    rewards_token: 'DOUGH',
    toStakeSymbol: 'BPT',
    toStakeDesc: 'Balancer: DEFI+L/ETH 70/30',
    platform: '⚖️ Balancer',
    description: 'WEEKLY REWARDS',
    weeklyRewards: formatFiat(20000, ',', '.', ''),
    apy: 1.8,
    allowance: 0,
    allowanceKey: '',
    needAllowance: true,
    enabled: true,
  },
  {
    addressTokenToStake: '0x7aeFaF3ea1b465dd01561B0548c9FD969e3F76BA',
    aprEnabled: true,
    deprecated: true,
    addressUniPoll: '0x64964cb69f40A1B56AF76e32Eb5BF2e2E52a747c',
    name: 'DEFI+S / DAI',
    id: 5,
    poolLink:
      'https://app.uniswap.org/#/add/0x6B175474E89094C44Da98b954EedeAC495271d0F/0xaD6A626aE2B43DCb1B39430Ce496d2FA0365BA9C',
    platform: '🦄 Uniswap',
    contractType: 'UniPool',
    containing: [
      {
        symbol: 'DEFI+S',
        address: '0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c',
        balance: '0',
        icon: getTokenImage('0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c'),
      },
      {
        symbol: 'DAI',
        address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        balance: '0',
        icon: getTokenImage('0x6B175474E89094C44Da98b954EedeAC495271d0F'),
      },
    ],
    type: 'UniswapV2',
    toStakeDesc: 'Uniswap: DEFI+S/DAI 50/50',
    toStakeSymbol: 'LP',
    description: 'DEPRECATED POOL',
    rewards_token: 'DOUGH',
    weeklyRewards: formatFiat(25000, ',', '.', ''),
    apy: 1.8,
    allowance: 0,
    allowanceKey: '',
    needAllowance: true,
    enabled: true,
  },
];

export default incentivizedPools;
