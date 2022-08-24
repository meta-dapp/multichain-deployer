const Config = require('../networkconfig')
const rpc = {
    mainnet: {
        url: 'https://polygon-rpc.com/',
        chainId: 137
    },
    testnet: {
        url: 'https://matic-mumbai.chainstacklabs.com',
        chainId: 80001
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