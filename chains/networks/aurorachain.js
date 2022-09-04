const Config = require('../networkconfig')
const rpc = {
    mainnet: {
        url: 'https://mainnet.aurora.dev',
        chainId: 1313161554
    },
    testnet: {
        url: 'https://testnet.aurora.dev',
        chainId: 1313161555
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