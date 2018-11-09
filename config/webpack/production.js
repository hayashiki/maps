// eslint-disable-next-line
const SentryCliPlugin = require('@sentry/webpack-plugin');
const environment = require('./environment');

environment.plugins.append(
  'SentryCliPlugin',
  new SentryCliPlugin({
    include: 'public/packs',
    release: process.env.SOURCE_VERSION || process.env.GIT_SHA,
  }),
);

const productionEnvironment = environment.toWebpackConfig();

productionEnvironment.devtool = 'source-map';

module.exports = productionEnvironment;
