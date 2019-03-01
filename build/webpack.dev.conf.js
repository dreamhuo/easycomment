var config = require('../config');
var baseWebpackConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const webpack = require('webpack');

const config = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
});

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.log(err);
    return
  }
  console.log('处理完成！');
});