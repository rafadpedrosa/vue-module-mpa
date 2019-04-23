const moduleController = require('./moduleController')

const modules = moduleController.getWebPackConfigsByModuleEntries();

module.exports = modules;
