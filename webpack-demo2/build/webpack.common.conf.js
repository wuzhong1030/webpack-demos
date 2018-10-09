const developmentConfig = require('./webpack.dev.conf')
const productionConfig = require('./webpack.prod.conf')

const merge = require('webpack-merge')

const generateConfig = env => {
    return {
        entry: {
            app: './src/app.js'
        },
        output: {
            filename: 'bundle.[hash:5].js'
        }
    }
}

module.exports = env => {
    let config = env === 'development' ? developmentConfig : productionConfig
    return merge(generateConfig(), config)
}