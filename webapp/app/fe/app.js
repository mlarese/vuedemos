import Vue from 'vue'
import configApp from './app.config'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'

import guest from '../guest/store'
import prize from '../prize/store'
import cashback from '../cashback/store'
import reservation from '../reservation/store'


import App from './components/App'
import vuexI18n from 'vuex-i18n';

Vue.use(vuexI18n.plugin,store);

sync(store, router);

const app = new Vue({
  router,
  store,
  ...App
});
export {app,store,router}