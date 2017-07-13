import Vue from 'vue';

let ajax = Vue.$ioc.resolve('http');
let api = Vue.$ioc.resolve('api');
let mock = Vue.$ioc.resolve('mock');
let mockActive = Vue.$ioc.resolve('const/mock_active');

export default {
    getReservations(guestId=null){
        if(guestId===null) {
            return ajax.get(api.API_USER_RESERVATION);
        }else {
            if(mockActive)
                return ajax.get(api.API_BE_USER_RESERVATION);
            else
                return ajax.get(api.API_BE_USER_RESERVATION + '/' + guestId);
        }
    },
    checkReservation(reservationId,checkin,checkout){
        const params = {checkin,checkout};
        return ajax.get(api.API_USER_RESERVATION_CHECKAVAILABILITY+'/'+reservationId,{ params });
    },
    modifyReservation(reservationId,checkin,checkout){
        const data = {checkin,checkout};
        return ajax.put(api.API_USER_RESERVATION+'/'+reservationId,data);
    },
    deleteReservation(reservationId){
        return ajax.delete(api.API_USER_RESERVATION+'/'+reservationId);
    }
};