import Vue from 'vue';

let ajax = Vue.$ioc.resolve('http');
let api = Vue.$ioc.resolve('api');
let mockActive = Vue.$ioc.resolve('const/mock_active');

export default {
    updateData(data)        { return ajax.put(api.API_USER_PROFILE,{data});  },
    getProfile(){
        return ajax.get(api.API_USER_PROFILE);
    },
    getFidelity( userId=null )          {
        if(!userId)
            return ajax.get(api.API_USER_FIDELITY);
        else{
            if(mockActive)
                return ajax.get(api.API_BE_USER_FIDELITY);
            else
                return ajax.get(api.API_BE_USER_FIDELITY+'/'+userId);
        }
    }
};