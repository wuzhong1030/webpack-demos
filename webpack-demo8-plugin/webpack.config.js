var MyPlugin = require('./plugins/testPlugin')
var OrderPlugin = require('./plugins/orderPlugin')

module.exports = {
    mode: 'development',

    entry: {
        app: './src/app.js'
    },

    plugins: [
        new MyPlugin({
            a: 111
        }),

        new OrderPlugin({
        	
        })
    ]
}