require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonics = process.env.MNEMONICS
const walletAddress = process.env.WALLET_ADDRESS
const addressIndex = process.env.ADDRESS_INDEX

module.exports = (
    network_id,
    url
) => {
    return {
        network_id,
        provider: () => new HDWalletProvider(
            mnemonics,
            url,
            addressIndex
        ),
        from: walletAddress,
        gas: 5000000,
        confirmations: 4,
        timeoutBlocks: 10000
    }
}