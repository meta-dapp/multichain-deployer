const avalanche = require('./networks/avalanche')
const polygon = require('./networks/polygon')
const fantom = require('./networks/fantom')
const cronos = require('./networks/cronos')
const aurorachain = require('./networks/aurorachain')

module.exports = {
    avalanche: avalanche.mainnet,
    avalanche_testnet: avalanche.testnet,
    polygon: polygon.mainnet,
    polygon_testnet: polygon.testnet,
    fantom: fantom.mainnet,
    fantom_testnet: fantom.testnet,
    cronos: cronos.mainnet,
    cronos_testnet: cronos.testnet,
    aurorachain: aurorachain.mainnet,
    aurorachain_testnet: aurorachain.testnet
}