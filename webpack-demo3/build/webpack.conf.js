var htmlWebpackPlugin = require('html-webpack-plugin')
var vueLoaderPlugin = require('vue-loader/lib/plugin')
var webpack = require('webpack')

module.exports = {
    mode: 'development',
    // entry: {
    //     app: './src/app.js'
    // },
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './src/app.js'
    ],
    output: {
        publicPath: '/',
        filename: '[name].bundle.[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin(),

        new webpack.ProvidePlugin({
            $: 'jquery'
        }),

        new webpack.HotModuleReplacementPlugin(),

        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
}