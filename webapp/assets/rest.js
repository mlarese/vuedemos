import Vue from 'vue'
import axios from 'axios'
import MockAdapter  from 'axios-mock-adapter'

Vue.$ioc.register('axios',axios);
let Logger=Vue.$ioc.resolve('Logger');

/**
 * @var String pathName
 * @type {string}
 */
let pathName =  window.location.pathname;
pathName = "/client";


let baseURL= pathName;

if(process.env.NODE_ENV === 'development')
    baseURL = '/';

if( window.location.hostname==="localhost" ){
    baseURL = '/';
}

Logger.info("connetting to",baseURL);

const instance  = axios.create({
    baseURL,
    timeout: 90000,
    headers: {   'Content-Type': 'application/json'    },
    withCredentials: true
});

export default instance;
export const rest = instance;
export const mockFactory = (mockActive)=>{
    if(!mockActive)
        return {};
    else
        return new MockAdapter(instance,{ delayResponse: 200 })
};