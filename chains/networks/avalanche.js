const Config = require('../networkconfig')
const rpc = {
    mainnet: {
        url: 'https://api.avax.network/ext/bc/C/rpc',
        chainId: 43114
    },
    testnet: {
        url: 'https://api.avax-test.network/ext/bc/C/rpc',
        chainId: 43113
    }
}

module.exports = {
    mainnet: Config(
        rpc.mainnet.chainId,
        rpc.mainnet.url
    ),
    testnet: Config(
        rpc.testnet.chainId,
        rpc.testnet.url
    )
}