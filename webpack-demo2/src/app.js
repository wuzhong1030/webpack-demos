import Vue from 'vue'
import App from './index.vue'

import './pageA'
import './pageB'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)
