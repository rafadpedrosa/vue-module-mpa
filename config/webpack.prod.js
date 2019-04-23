const moduleController = require('./moduleController')

const modules = moduleController.getWebPackConfigsByModuleEntries();

const prodModules = modules.map( module => {
  return { ...module, mode: "production" }
})

module.exports = prodModules;
