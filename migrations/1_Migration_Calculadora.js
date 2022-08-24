const Calculadora = artifacts.require('Calculadora')

module.exports = function (deployer) {
    deployer.deploy(Calculadora)
}