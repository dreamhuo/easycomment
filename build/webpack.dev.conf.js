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
    mode: 'production',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist'),{
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: '开发环境'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
});

const options = {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    host: 'localhost'
};

// 想要启用 HMR，还需要修改 webpack 配置对象，使其包含 HMR 入口起点。
// webpack-dev-server package 中具有一个叫做 addDevServerEntrypoints 的方法，你可以通过使用这个方法来实现
webpackDevServer.addDevServerEntrypoints(webpackConfig, options);

const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
})