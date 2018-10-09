const webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 9091,
        overlay: true,
        historyApiFallback: true,
        hot: true, //启用webpack的热模块更换功能
        hotOnly: true, //某些模块不支持热更新的时候，也不刷新页面作为回退机制，会在控制台输出热更新失败
        proxy: {
            '/': {
                target: 'https://m.weibo.cn',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/config': '/api/config'
                },
                header: {
                    'Cookie': ''
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin()
    ]
}