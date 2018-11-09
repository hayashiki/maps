const { environment } = require('@rails/webpacker');
const webpack = require('webpack');
const merge = require('webpack-merge');

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default'],
  }),
);

environment.loaders.prepend(
  'source-map-loader',
  {
    test: /\.js$/,
    use: ['source-map-loader'],
    enforce: 'pre',
  },
);

const babelConfig = {
  plugins: [
    'babel-plugin-redux-saga',
  ],
};

const babelLoader = environment.loaders.get('babel').use.find(el => el.loader === 'babel-loader');
merge(babelLoader.options, babelConfig);

const sassLoader = environment.loaders.get('sass').use.find(el => el.loader === 'sass-loader');
sassLoader.options.includePaths = require('bourbon').includePaths;

module.exports = environment;
