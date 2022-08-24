const CuentaRegresiva = artifacts.require('CuentaRegresiva')

module.exports = function (deployer) {
    deployer.deploy(CuentaRegresiva)
}