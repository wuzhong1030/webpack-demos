var MyPlugin = require('./plugins/testPlugin')

module.exports = {
    mode: 'development',

    entry: {
        app: './src/app.js'
    },

    plugins: [
        new MyPlugin({
            a: 111
        })
    ]
}