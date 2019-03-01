module.exports = {
    build: {},
    dev: {},
    examplesDev: {
        env: require('./examples.dev.env'),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false
    }
}