const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('../config/webpack.config.js');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

// 想要启用 HMR，还需要修改 webpack 配置对象，使其包含 HMR 入口起点。
// webpack-dev-server package 中具有一个叫做 addDevServerEntrypoints 的方法，你可以通过使用这个方法来实现
webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 50000');
});