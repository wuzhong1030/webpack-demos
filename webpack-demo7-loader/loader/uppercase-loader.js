module.exports = function (src) {
    console.log('--- uppercase loader start ---')
    src = src.charAt(0).toUpperCase() + src.slice(1)
    console.log('--- uppercase loader end ---')
    return src
}