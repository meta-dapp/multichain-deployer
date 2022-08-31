const Config = require('../networkconfig')
const rpc = {
    mainnet: {
        url: 'https://evm.cronos.org/',
        chainId: 25
    },
    testnet: {
        url: 'https://evm-t3.cronos.org/',
        chainId: 338
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