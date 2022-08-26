const AdministrarUsuarios = artifacts.require('AdministrarUsuarios')

module.exports = function (deployer) {
    deployer.deploy(AdministrarUsuarios)
}