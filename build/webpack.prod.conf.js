var config = require('../config');
var baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: config.build.mode,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'easycomment.js',
        library: 'easycomment',
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist'),{
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: config.build.mode
            }
        })
    ]
});

webpack(prodWebpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.log(err);
    return
  }
  console.log('处理完成！');
});