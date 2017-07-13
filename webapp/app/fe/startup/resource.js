import Vue from 'vue'

let ajax = Vue.$ioc.resolve('http');
let api = Vue.$ioc.resolve('api');


export default {
    getConfig()             { return ajax.get(api.API_USER_STARTUP);  },
};

