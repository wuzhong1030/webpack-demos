const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new cleanWebpackPlugin('dist')
    ]
}