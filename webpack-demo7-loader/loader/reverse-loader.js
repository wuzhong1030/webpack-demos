module.exports = function (src) {
    if (src) {
        console.log('--- resver-loader start ---')
        src  = src.split('').reverse().join('')
        console.log('--- resver-loader end ---')
    }
    return src
}