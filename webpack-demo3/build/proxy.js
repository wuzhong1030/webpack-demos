module.exports = {
    '/.+': {
        target: 'https://m.weibo.cn',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
            '^/config': '/api/config'
        },
        header: {
            'Cookie': ''
        }
    }
}