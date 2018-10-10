var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        main: './src/foo.js',
        vendor: ['react']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    minChunks: Infinity
                },
            },
        },
        runtimeChunk: {
            name: "manifest",
        }
    },

    plugins: [
        new webpack.NamedChunksPlugin(),

        new webpack.NamedModulesPlugin()
        // new webpack.optimize.SplitChunksPlugin({
        //     name: 'vendor',
        //     minChunks: Infinity
        // })

        // new webpack.optimize.CommonsChunkPlugin({}) //webpack3
    ]
}