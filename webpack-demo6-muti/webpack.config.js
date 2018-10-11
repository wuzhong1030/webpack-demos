var webpack = require('webpack')
var path = require('path')
var merge = require('webpack-merge')
var htmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin')

var baseConfig = {
    entry: {
        react: ['react']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "react",
                    minChunks: Infinity
                },
            },
        }
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),

        new cleanWebpackPlugin('dist')
    ]
}

var generatePages = function ({
    title = '',
    entry = '',
    template = './src/index.html',
    name = '',
    chunks = []
}) {
    return {
        entry,
        plugins: [
            new htmlWebpackPlugin({
                template,
                chunks,
                filename: name + '.html'
            })
        ]
    }
}

var pages = [
    generatePages({
        title: 'page A',
        entry: {
            a: './src/a.js'
        },
        name: 'a',
        chunks: ['react', 'a']
    }),
    generatePages({
        title: 'page B',
        entry: {
            b: './src/b.js'
        },
        name: 'b',
        chunks: ['react', 'b']
    }),
    generatePages({
        title: 'page C',
        entry: {
            c: './src/c.js'
        },
        name: 'c',
        chunks: ['react', 'c']
    })
]

module.exports = merge(baseConfig, pages)
