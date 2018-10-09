import Vue from 'vue'
import App from './index.vue'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)

if (module.hot) {
    module.hot.accept();
}