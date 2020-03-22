import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import Fingerprint from 'fingerprintjs';
import axios from 'axios';
import App from './App.vue';
import routes  from './routes';
import storeX from './store';

Vue.use(ElementUI, {locale});
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.prototype.$http = axios.create({
  baseURL:  Vue.config.devtools ? 'http://127.0.0.1:8000/action':'https://akasanoma.herokuapp.com/action'
});


Vue.prototype.$deviceHash = new Fingerprint().get();

const router = new VueRouter({
  // mode: 'history',
  routes:routes
});

const store = new Vuex.Store(storeX)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
