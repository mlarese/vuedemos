import Vue from 'vue'
import Logger from 'js-logger'

Logger.useDefaults();
Vue.$ioc.register('Logger',Logger);

export default 'log';