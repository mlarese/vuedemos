import Vue from 'vue';

let ajax = Vue.$ioc.resolve('http');
let api = Vue.$ioc.resolve('api');
let mockActive = Vue.$ioc.resolve('const/mock_active');

export default {
    load(   ){
        return ajax.get(api.API_USER_CASHBACK  );
    },
    loadRequests( guestId ){
        if(mockActive)
            return ajax.get(api.API_BE_USER_CASHBACK  );
        else
            return ajax.get(api.API_BE_USER_CASHBACK +'/'+guestId );
    },
    withdraw( data ){
        return ajax.post(api.API_USER_CASHBACK,data);
    }
};