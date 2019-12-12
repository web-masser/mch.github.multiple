import Vue from 'vue'
import App from './secondHand.vue'
import router from './router'
import store from '@/store'
import VConsole from 'vconsole'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new VConsole()

router.beforeEach((to, from, next) => {
    
})

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')