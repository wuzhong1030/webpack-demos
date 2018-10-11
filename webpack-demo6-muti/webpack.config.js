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

        new cleanWebpackPlugin('dist')
    ]
}

var generatePages = function ({
    title = '',
    entry = '',
    template = 'index.html',
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
            a: './pages/a.js'
        },
        name: 'a',
        chunks: ['react', 'a']
    }),
    generatePages({
        title: 'page B',
        entry: {
            b: './pages/b.js'
        },
        name: 'b',
        chunks: ['react', 'b']
    }),
    generatePages({
        title: 'page C',
        entry: {
            c: './pages/c.js'
        },
        name: 'c',
        chunks: ['react', 'c']
    })
]

console.log(pages.map(page => merge(baseConfig, page)))

module.exports = pages.map(function (page) {
    return merge(baseConfig, page)
})
