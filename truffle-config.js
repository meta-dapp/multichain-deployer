const path = require('path')
const apikeys = require('./chains/apikeys')
const chains = require('./chains/get')

module.exports = {
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: apikeys,
    contracts_build_directory: path.join(__dirname, "abis"),
    networks: chains,
    compilers: {
        solc: {
            version: '0.8.9',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    }
}