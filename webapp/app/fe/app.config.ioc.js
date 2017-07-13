import Vue from 'vue'
import Vuec from '../../../assets/lib/ioc/VueIoc'
import LocalStoreManager from 'locallyjs'
import {Rules,Validator} from 'vee-validate'
import moment from 'moment'

Validator.installDateTimeValidators(moment );
const localStorage = new LocalStoreManager.Store({ compress: true });

Vue.use(Vuec);

Vue.$ioc.register('const/commitfromroot', { root: true });
Vue.$ioc.register('localStorage', localStorage);
Vue.$ioc.register('Rules', Rules);

export default 'ioc';
