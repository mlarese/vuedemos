import Vue from 'vue'
import './promise-polyfill'
import { app } from './app'

// enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

const noScreen = Vue.$ioc.resolve('const/no_screen');

if(noScreen)  require('./tests');
else app.$mount('#app');

