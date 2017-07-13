import Vue from 'vue'
import Router from 'vue-router'
import confIoc from './app.config.ioc'
import confLog from './app.config.log'
import confLang from './app.config.lang'
import confRest from './app.config.rest'

import vuexI18n from 'vuex-i18n'
import vueMoment from 'vue-moment'
import vueFilter from 'vue-filter'
import debounce from '../../../assets/directives/debounce'

Vue.use(vueFilter);
Vue.use(vueMoment);
Vue.use(Router);

export default 'config';