const Config = require('../networkconfig')
const rpc = {
    mainnet: {
        url: 'https://rpcapi.fantom.network/',
        chainId: 250
    },
    testnet: {
        url: 'https://rpc.testnet.fantom.network/',
        chainId: 4002
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