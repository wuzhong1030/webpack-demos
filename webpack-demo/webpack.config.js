var path = require('path')
var webpack = require('webpack')
var vueLoaderPlugin = require('vue-loader/lib/plugin')
var htmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    devServer: {  //这里配置webpack-dev-server
        publicPath: '/',
        // hot: true,
        // inline: false,
        // lazy: false,
        // contentBase: false,
        port: 8080,
        // overlay: true
    },

    mode: 'development',

    // entry: {
    //     app: path.resolve(__dirname, 'src', 'app.js')
    // },

    entry: ["./src/app.js"],

    output: {
        path: path.join(__dirname, '/dist'),
        // publicPath: '/',
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|svg|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new vueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new cleanWebpackPlugin('dist'),
        new webpack.HotModuleReplacementPlugin()
    ]
}