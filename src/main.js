import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/iconfont.css'

import Alert from '@/components/alert/index'
import '@/assets/style/alert.css'

Vue.use(Alert)
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
