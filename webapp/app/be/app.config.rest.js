import Vue from 'vue'
import rest from '../../assets/rest'
import {mockFactory} from '../../assets/rest'
import * as api from '../../assets/api-consts';

const mockActive = false;

Vue.$ioc.register('http',rest);
Vue.$ioc.register('api',api);
Vue.$ioc.register('mock',mockFactory(mockActive));
Vue.$ioc.register('const/mock_active',mockActive);
Vue.$ioc.register('const/no_screen',false);

export default 'rest' ;

