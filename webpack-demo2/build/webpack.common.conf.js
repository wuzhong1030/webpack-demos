const developmentConfig = require('./webpack.dev.conf')
const productionConfig = require('./webpack.prod.conf')

const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
// const extractTextWebpackPlugin = require('extract-text-webpack-plugin')
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const generateConfig = env => {

    const extractLess = new miniCssExtractPlugin({
        filename: 'css/[name].bundle.[hash:6].css'
    })

    const cssLoaders = [
        {
            loader: 'css-loader',
            options: {
                sourceMap: env === 'development',
                minimize: true
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
                sourceMap: env === 'development',
                minimize: true
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
    //[MiniCssExtractPlugin.loader,'css-loader']
    const styleLoader =
        env === 'production'
            // ? extractLess.extract({
            //     fallback: 'style-loader',
            //     use: cssLoaders
            // })
            ? [miniCssExtractPlugin.loader, ...cssLoaders]
            : [{
                loader: 'style-loader'
            }].concat(cssLoaders)

    const eslintloader = env === 'production'
        ? []
        : [{
            loader: 'eslint-loader',
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        }]

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
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
                {
                    test: /\.(js|vue)$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    include: [path.resolve(__dirname, 'src')],
                    use: eslintloader
                },
                {
                    test: /\.less$/,
                    use: styleLoader
                },
                {
                    test: /\.js/,
                    exclude: /node_modules/,
                    include: [path.resolve(__dirname, 'src')],
                    use: scriptLoader
                }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: "commons",
                        chunks: "initial",
                        minChunks: 2
                    }
                }
            }
        },
        plugins: [
            extractLess,

            // new cleanWebpackPlugin(path.resolve(__dirname), './dist'),
            new cleanWebpackPlugin('./dist'),
            // new BundleAnalyzerPlugin(), //打包分析插件

            new vueLoaderPlugin(), //把其他规则也copy一份到vue文件中使用

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

    return merge(generateConfig(env), config)
}