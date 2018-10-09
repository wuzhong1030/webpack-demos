const express = require('express')
const webpack = require('webpack')
const opn = require('opn')

const app = express()
const port = 3000

const proxyMiddleware = require('http-proxy-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const historyApiFallback = require('connect-history-api-fallback')

const config = require('./webpack.conf')
const complier = webpack(config)

const proxyTable = require('./proxy')

for (let context in proxyTable) {
    app.use(proxyMiddleware(context, proxyTable[context]))
}

app.use(historyApiFallback(require('./history-api-fallback')))

app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(complier))

app.listen(port, function () {
    console.log(`success listen on ${port}`)
    opn(`http://localhost:${port}`)
})