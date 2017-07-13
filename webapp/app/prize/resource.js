import Vue from 'vue';
let Logger = Vue.$ioc.resolve('Logger');
let ajax = Vue.$ioc.resolve('http');
let api = Vue.$ioc.resolve('api');
let mockActive = Vue.$ioc.resolve('const/mock_active');

export default {
    loadList(guestId=null)      {
        if(!guestId) {
            return ajax.get(api.API_USER_PRIZE);
        }else{
            if(mockActive){
                return ajax.get(api.API_BE_USER_PRIZE);
            }else{
                return ajax.get(api.API_BE_USER_PRIZE+'/'+guestId);
            }
        }
    },
    loadPrize(id)               { return ajax.get(api.API_USER_PRIZE+'/'+id);  },
    requirePrize(id,data)       { return ajax.put(api.API_USER_PRIZE+'/'+id,data); },
    changeState(id,data)          { return ajax.put(api.API_USER_PRIZE+'/'+id,data); },
};