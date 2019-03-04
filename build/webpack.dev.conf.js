const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');
const opn = require('opn');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    entry: {
       main: path.resolve(__dirname, '../example/main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist'),{
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './example/index.html',
            inject: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()    //引入热更新插件
    ],
    devtool: 'inline-source-map',
    devServer:{
        host:'localhost',
        progress:true,
        port:1573,
        open:true,
        hot:true
    }
});

module.exports = webpackConfig;