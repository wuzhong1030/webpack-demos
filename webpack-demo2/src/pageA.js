const page = 'subPageA'

// import subPageA from './subPageA'
// import subPageB from './subPageB'

if (page === 'subPageA') {
    import(/* webpackChunkName: 'subPageA' */'./subPageA').then(function (subPageA) {
        console.log(subPageA)
    })
} else {
    import(/* webpackChunkName: 'subPageA' */'./subPageB').then(function (subPageB) {
        console.log(subPageB)
    })
}

// console.log(subPageA)
// console.log(subPageB)

export default 'pageA'