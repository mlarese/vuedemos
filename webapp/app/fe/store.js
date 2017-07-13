import {state,mutations,actions,getters} from './startup/store'
import Vue from 'vue'
import vuexI18n from 'vuex-i18n';
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
    //plugins: [createPersistedState({ storage: window.sessionStorage })],
    state,
    mutations,
    actions,
    getters,
    modules: { i18n: vuexI18n.store  },
});

export default store;
Vue.$ioc.register('store',store);

