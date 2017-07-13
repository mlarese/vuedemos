import Vue from 'vue'
import Vuec from '../../../assets/lib/ioc/VueIoc'
Vue.use(Vuec);
Vue.$ioc.register('const/commitfromroot', { root: true });

export default 'ioc';