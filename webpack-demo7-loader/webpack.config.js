module.exports = {
    mode: 'development',
    
    entry: {
        app: './src/app.js'
    },

    module: {
        rules: [
            {   
                test: /\.txt$/,
                use: [
                    './loader/uppercase-loader.js',
                    './loader/reverse-loader.js'
                ]
            }
        ]
    }
}