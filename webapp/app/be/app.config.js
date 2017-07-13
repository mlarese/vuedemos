import Vue from 'vue'
import Router from 'vue-router'
import confIoc from './app.config.ioc'
import confLog from './app.config.log'
import confLang from './app.config.lang'
import confRest from './app.config.rest'

import vuexI18n from 'vuex-i18n'
import vueMoment from 'vue-moment'
import vueFilter from 'vue-filter'
import {VuePagination} from 'vue-pagination-2'
import '../../assets/css/absfg.css';

Vue.use(vueFilter);
Vue.use(vueMoment);
Vue.use(Router);
Vue.use(VuePagination, true );

export default 'config';