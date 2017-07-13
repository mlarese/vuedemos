import {state,mutations,actions,getters} from './startup/store'
import Vue from 'vue'
import vuexI18n from 'vuex-i18n';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: { i18n: vuexI18n.store }
});

export default store;

if(Vue.$ioc)
    Vue.$ioc.register('store',store);