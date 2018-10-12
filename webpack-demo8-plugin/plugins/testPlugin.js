class MyPlugin {
    constructor(options) {
        if (options)
            console.log('MyPlugin options is ' + JSON.stringify(options))
    }
    apply(complier) {
        complier.plugin('compilation', compilation => {
            console.log('MyPlugin apply call')
        })
    }
}

module.exports = MyPlugin