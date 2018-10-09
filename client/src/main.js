import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import MomentVue from 'vue-moment';
import VueNativeSocket from 'vue-native-websocket';

import App from './App.vue'
import store from './store.js'
import router from './router.js';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(MomentVue);

// Hook up the vue-native-socket with automagic reconnection
// Individual pages will determine what to do with the messages
Vue.use(VueNativeSocket, 'ws://localhost:8082', {
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000,
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
