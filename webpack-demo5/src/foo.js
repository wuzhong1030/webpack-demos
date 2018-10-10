import react from 'react'
import module from './module'

import('./async').then(function (r) {
    console.log(r)
})

console.log('hello react.....')
console.log(module)