const developmentConfig = require('./webpack.dev.conf')
const productionConfig = require('./webpack.prod.conf')

const merge = require('webpack-merge')
const webpack = require('webpack')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

const generateConfig = env => {

    const extractLess = new extractTextWebpackPlugin({
        filename: 'css/[name].bundle.[hash:6].css'
    })

    const cssLoaders = [
        {
            loader: 'css-loader',
            options: {
                sourceMap: env === 'development'
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: [
                    require('postcss-cssnext')()
                ].concat(
                    env === 'production'
                        ? require('postcss-sprites')({
                            spritePath: 'dist/assets/images/sprites',
                            retina: true
                        })
                        : []
                )
            }
        },
        {
            loader: 'less-loader',
            options: {
                sourceMap: env === 'development'
            }
        }
    ]

    const scriptLoader = [
        {
            loader: 'babel-loader'
        }
    ].concat(env === 'production'
        ? []
        : [{
            loader: 'eslint-loader',
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        }]
    )

    const styleLoader = [
        env === 'production'
            ? extractLess.extract({
                fallback: 'style-loader',
                use: cssLoaders
            })
            : [{
                loader: 'style-loader'
            }].concat(cssLoaders)
    ]

    return {
        entry: {
            app: './src/app.js'
        },
        output: {
            filename: 'bundle.[hash:5].js'
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: styleLoader
                },
                {
                    test: /\.js/,
                    use: scriptLoader
                }
            ]
        },
        plugins: [
            extractLess,

            new htmlWebpackPlugin({
                template: 'index.html',
                filename: 'index.html',
                minify: {
                    collapseWhitespace: true
                }
            }),

            new webpack.ProvidePlugin({
                $: 'jquery'
            })
        ]
    }
}

module.exports = env => {
    let config = env === 'development' ? developmentConfig : productionConfig
    return merge(generateConfig(), config)
}