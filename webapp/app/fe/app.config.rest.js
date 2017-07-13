import Vue from 'vue'
import rest from '../../assets/rest'
import * as api from '../../assets/api-consts';

Vue.$ioc.register('http',rest);
Vue.$ioc.register('api',api);

export default 'rest';