const DepositarCryptos = artifacts.require('DepositarCryptos')

module.exports = function (deployer) {
    deployer.deploy(DepositarCryptos)
}