var htmlWebpackPlugin = require('html-webpack-plugin')
var vueLoaderPlugin = require('vue-loader/lib/plugin')
var webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    output: {
        publicPath: '/',
        filename: '[name].bundle.[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin(),

        new webpack.ProvidePlugin({
            $: 'jquery'
        }),

        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
}