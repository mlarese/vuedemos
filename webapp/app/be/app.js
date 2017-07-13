import Vue from 'vue'
import configApp from './app.config'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import App from './components/App'
import vuexI18n from 'vuex-i18n';
import VueScrollTo  from 'vue-scrollto'
import PortalVue from 'portal-vue'

/***
 * Importing domain stores
 */
import guest from '../guest/store'
import portal_user from '../portal_user/store'
import reservation from '../reservation/store'
import prize from '../prize/store'
import cashback from '../cashback/store'

Vue.use(PortalVue);

Vue.use(vuexI18n.plugin,store);
Vue.use(VueScrollTo );

sync(store, router);

const app = new Vue({
  router,
  store,
  ...App
});


export {app,store,router}