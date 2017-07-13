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
pathName = pathName.replace("AbsFrequentGuest","absfrequentguest").replace("/client","");


let baseURL= pathName;

if(process.env.NODE_ENV === 'development')
    baseURL = 'http://servicehub.abs-one.dev/absfrequentguest/res/01/0';

if( window.location.hostname==="localhost" ){
    baseURL = 'http://servicehub.abs-one.dev/absfrequentguest/res/01/0';
    //baseURL = 'http://localhost/ajax-proxy.php?url=http://servicehub.abs-one.stg/absfrequentguest/res/01/0';
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