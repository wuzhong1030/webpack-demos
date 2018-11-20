import Vue from 'vue'
import App from './index.vue'

import './assets/css/base.less'

import './pageA'
import './pageB'

const root = document.createElement('div')
document.body.appendChild(root)

// importDemo.mjs
import { counter, incCounter } from './exportDemo'

// incCounter();
// console.log('xxx', counter)		// 打印结果为2，而不是初始值的1

import { foo } from './a'
import { bar } from './b'

new Vue({
  render: (h) => h(App)
}).$mount(root)
