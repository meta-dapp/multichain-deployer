const avalanche = require('./networks/avalanche')
const polygon = require('./networks/polygon')
const fantom = require('./networks/fantom')


module.exports = {
    avalanche: avalanche.mainnet,
    avalanche_testnet: avalanche.testnet,
    polygon: polygon.mainnet,
    polygon_testnet: polygon.testnet,
    fantom: fantom.mainnet,
    fantom_testnet: fantom.testnet
}