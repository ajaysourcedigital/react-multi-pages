const { merge } = require('webpack-merge');
const baseConfig = require('../webpack.config.js');
const path = require('path');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
    port: 3000,
  },
});
