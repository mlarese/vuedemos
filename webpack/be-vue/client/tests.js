import Vue from 'vue'
import resource from '../../../../node-dev/mmone-lib/v.1.0/frequent-guest/app/be/startup/resource'
console.log('running tests');
export const  test='test';

let store = Vue.$ioc.resolve("store");
let axios = Vue.$ioc.resolve('http');

/**get config */
const debugAxios = false;
const debugResource = false;
const debugStore = true;

if(debugAxios)
    axios.get('/backend/user/startup')
        .then(res=>{
            console.log('[axios]/backend/user/startup');
            console.log("ok",res);
        }).catch(err=>{
            console.log('[axios]/backend/user/startup');
            console.log("err",err);
        });

if(debugResource)
    resource.getConfig()
        .then(res=>{
            console.log('[resource] getConfig');
            console.log("ok",res);
        }).catch(err=>{
            console.log('[resource] getConfig');
            console.log("err",err);
        });

if(debugStore)
    store.dispatch('getConfig')
        .then(res=>{
            console.log('[store] getConfig');
            console.log("ok",res);
        }).catch(err=>{
            console.log('[store] getConfig');
            console.log("err",err);
        });

/**get config */

