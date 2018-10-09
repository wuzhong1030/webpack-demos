var path = require('path')
var webpack = require('webpack')
var vueLoaderPlugin = require('vue-loader/lib/plugin')
var htmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    devServer: {  //这里配置webpack-dev-server
        publicPath: '/',
        hot: true,
        // inline: false,
        // lazy: false,
        // contentBase: false,
        port: 8080,
        // historyApiFallback: true
        historyApiFallback: {
            rewrites: [
                {
                    // from: '/pages/a',
                    from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
                    to: function (context) {
                        return '/' + context.match[1] + context.match[2] + '.html'
                    }
                }
            ]
        },
        //远端接口代理
        proxy: {
            '/': {
                target: 'https://m.weibo.cn',
                logLevel: 'debug',
                pathRewrite: {
                    '^/config': '/api/config'
                },
                headers: {
                    Cookie: '_T_WM=1e60e361e83a9ca0f845fb43711a4a7e; WEIBOCN_FROM=1110003030; ALF=1541574447; SCF=Agub1jOF76A_t1ivbNoH6MwKdr8abYPN4zRZY0bM6olXCVeIK-wQsYhkJeV81YYWYKGD508-iyjLAgnEtg7Y7BI.; SUB=_2A252v3J_DeRhGedG7VAW9SrEyz-IHXVSQB43rDV6PUNbktANLVbQkW1NUTSUKnDPcaOAw11TEh_hMU4TJq5PA4bg; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WWXz9WgR_mXF6juJ-w_bNxr5JpX5KMhUgL.Fo2RSozNSKBRehe2dJLoIp7LxKML1-qLBoeLxK-LBKBLBoBLxK-LB.qLBKWk; SUHB=0OMl-IH3-CtEzo; SSOLoginState=1538982448; MLOGIN=1; M_WEIBOCN_PARAMS=lfid%3D1005051862754803%252Fhome%26luicode%3D20000174%26uicode%3D20000174'
                },
                changeOrigin: true //改变源到设置的路径上
            }
        },
        overlay: true
    },

    mode: 'development',

    devtool: 'scource-map', //开启调试

    entry: ["./src/app.js"],

    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: "bundle.js"
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
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-friendly-formatter')
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: {
                                        browsers: ['> 1%', 'last 2 versions']
                                    }
                                }]
                            ]
                        },
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
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

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}