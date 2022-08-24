const avalanche = require('./networks/avalanche')
const polygon = require('./networks/polygon')

module.exports = {
    avalanche: avalanche.mainnet,
    avalanche_testnet: avalanche.testnet,
    polygon: polygon.mainnet,
    polygon_testnet: polygon.testnet
}