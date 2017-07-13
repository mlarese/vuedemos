import Vue from 'vue'
import locale from 'numeral/locales'
import  '../../../assets/locale/vue-strap-lang'
import numeral from 'numeral'
import {getBrowserLocale}  from '../../../assets/localehlp'

const language = getBrowserLocale();
numeral.locale(  language  );
Vue.$ioc.register('const/language', language);

export default 'lang';