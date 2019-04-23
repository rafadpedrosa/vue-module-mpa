const moduleEntries = require('./moduleEntries');
const path = require("path");

const getModuleEntriesByName = name => {
  return moduleEntries[ name ]
};

const commonConfig = getModuleEntriesByName('commonConfig');
const outputFolder = getModuleEntriesByName('outputFolder');

const getSubModules = moduleName => {
  return Object.values(moduleEntries[ moduleName ])
}

const createConfig = (accumulatorSubModules, currentSubModules) => {
  const mappedSubModules = currentSubModules.map(({ name, _path }) => {
    return {
      entry: {
        main: name
      },
      output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, outputFolder, _path),
        publicPath: "./"
      },
      ...commonConfig
    }
  });

  accumulatorSubModules.push(...mappedSubModules)

  return accumulatorSubModules;
};

const modulesConfig = Object.keys(moduleEntries)
  .filter(key => key !== 'commonConfig' && key !== 'outputFolder')
  .map(getSubModules)
  .reduce(createConfig, []);

module.exports = {
  getWebPackConfigsByModuleEntries: () => modulesConfig,
  getCommonConfig: commonConfig
};
