const environment = require('./environment');

const devEnvironment = environment.toWebpackConfig();

devEnvironment.devtool = 'eval-source-map';

module.exports = devEnvironment;
