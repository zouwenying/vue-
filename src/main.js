import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import VueIl8n from 'vue-i18n'
import htmlToPdf from '@/utils/htmlToPdf.js'
import App from './App.vue'
import store from './store'
import './directives/derectives.js'

Vue.config.productionTip = false

Vue.use(VueIl8n);
Vue.use(htmlToPdf);
Vue.use(ElementUI);

const i18n = new VueIl8n({
    locale: 'zh-CN',//语言标识
    messages: {
        'zh-CN': require('./lang/zh'),
        'en-US': require('./lang/en')
    }
})

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app')
