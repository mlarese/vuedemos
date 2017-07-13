import Vue from 'vue'
import {extendReservations} from './pages/client-reservation-list-page/flowresextender'
import * as mngRes from './pages/client-reservation-list-page/flowconsts'
import resource from './resource'
import _has from 'lodash/has'
import _delay from 'lodash/delay'
import _extend from 'lodash/extend'
import _filter from 'lodash/filter'
import _sortBy from 'lodash/sortBy'
import {getToday} from '../../../assets/datehlp'

const today=getToday();
let Logger = Vue.$ioc.resolve('Logger');
let fromRoot = Vue.$ioc.resolve("const/commitfromroot");

const state = {
    guestReservations:[],
    operations:{ search:null , sortBy:'checkin'},
    isDetailsVisible:false
};

const mutations= {
    SET_GUEST_RESERVATIONS: (state, payLoad) => state.guestReservations = payLoad,
    SET_OPERATIONS: (state, payLoad) => state.operations = payLoad,
    SET_IS_DETAILS_VISIBLE: (state, payLoad=false) => state.isDetailsVisible = payLoad,
    TOGGLE_DETAILS_VISIBLE: (state) => state.isDetailsVisible = !state.isDetailsVisible,
};

const NO_GUEST = null;
const CURRENT_GUEST = 0;

const actions={
    showDetails({commit}){
        commit('SET_IS_DETAILS_VISIBLE',true)
    },
    hideDetails({commit}){
        commit('SET_IS_DETAILS_VISIBLE',false)
    },
    toggleDetailsVisibility({state,commit}){
        commit('TOGGLE_DETAILS_VISIBLE');
    },
    /**
     *
     * @param commit
     * @param dispatch
     * @param rootGetters
     * @param guest
     *               null no guest Id
     *               0 use currentGuest from guest store
     *               guestId
     */
    loadGuestReservations({commit,dispatch,rootGetters},payLoad  ){
        payLoad=payLoad||{guestId:NO_GUEST,applyExtend:true};

        commit('SET_ERROR',null,fromRoot);
        commit('SET_MESSAGE',null,fromRoot);
        commit('SET_LOADING',true,fromRoot);

        let {guestId,applyExtend} = payLoad;

        if(guestId===CURRENT_GUEST){
            const guest = rootGetters['guest/currentGuest'] ;
            guestId = guest.id;
        }

        return resource.getReservations(guestId)
            .then(res=>{
                let reservations;

                if(applyExtend)
                    reservations =  extendReservations(res.data);
                else {
                    reservations = res.data.data;
                }

                commit('SET_LOADING',false,fromRoot);
                commit('SET_GUEST_RESERVATIONS',reservations);
                return res;
            }).catch(err=>{
                let message = 'Network Error' ;
                if(_has(err,"response.data.detail")){
                    message=err.response.data.detail;
                }
                commit('SET_LOADING',false,fromRoot);
                commit('SET_ERROR',err,fromRoot);
                commit('SET_MESSAGE',message,fromRoot);

                return err;
            })
    },
    resetCheckModifyResult(reservationVm){
        reservationVm.checkModifyResult = {};
    },
    updateReservationVm({state,commit,dispatch},{reservationVm,newStatus=null,checkModifyResult=null,deleted=null}){
        if(newStatus)
            reservationVm.status = newStatus;
        if(checkModifyResult)
            reservationVm.checkModifyResult = checkModifyResult;
        if(deleted)
            reservationVm.deleted = deleted;
    },
    deleteReservation({commit,dispatch},{reservationId}){
        commit('SET_ERROR',null,fromRoot);
        commit('SET_MESSAGE',null,fromRoot);
        commit('SET_LOADING',true,fromRoot);

        return resource.deleteReservation(reservationId)
            .then(res=>{
                commit('SET_LOADING',false,fromRoot);
                return res;
            }).catch(err=>{
                let message = 'Network Error' ;
                if(_has(err,"response.data.detail")){
                    message=err.response.data.detail;
                }

                commit('SET_LOADING',false,fromRoot);
                commit('SET_ERROR',err,fromRoot);
                commit('SET_MESSAGE',message,fromRoot);

                if(console)
                    console.dir(err);
                return err
            })
    },
    checkReservation({state,commit,dispatch},{reservationVm,checkin,checkout}){
        let reservation = reservationVm.reservation;
        let reservationId = reservation.reservationId;
        let newStatus = mngRes.RMNG_STATUS_CHECKING;
        let checkModifyResult = {};

        commit('SET_ERROR',null,fromRoot);
        commit('SET_MESSAGE',null,fromRoot);
        commit('SET_LOADING',true,fromRoot);

        dispatch('updateReservationVm',{reservationVm,newStatus,checkModifyResult});

        return resource.checkReservation(reservationId,checkin,checkout)
            .then(res=>{
                let response = res.data.data;
                checkModifyResult = {checkin,checkout,response};
                dispatch('updateReservationVm',{reservationVm,checkModifyResult});

                _delay( ()=>{
                    if(checkModifyResult.response.available && checkModifyResult.response.price>0 ){
                        newStatus = mngRes.RMNG_STATUS_CHECKED_AVAILABLE;
                        dispatch('updateReservationVm',{reservationVm,newStatus});
                    }else{
                        newStatus = mngRes.RMNG_STATUS_CHECKED_NOT_AVAILABLE;
                        dispatch('updateReservationVm',{reservationVm,newStatus});
                    }

                },200 );
                commit('SET_LOADING',false,fromRoot);
                return res;

            }).catch(err=>{
                let message='Network Error' ;
                if(_has(err,"response.data.detail")){
                    message=err.response.data.detail;
                }
                const newStatus = mngRes.RMNG_STATUS_CHECKED_ERROR;
                dispatch('updateReservationVm',{reservationVm,newStatus});

                commit('SET_LOADING',false,fromRoot);
                commit('SET_ERROR',err,fromRoot);
                commit('SET_MESSAGE',message,fromRoot);

                return err;
            })
    },
    updateReservation({state,commit,dispatch},{reservationVm,updatedReservation}){

        if(updatedReservation.modifyRequest)
            updatedReservation = updatedReservation.modifyRequest ;
        Vue.set(reservationVm.reservation,'modifyRequest',updatedReservation);
    },
    modifyReservation({commit,dispatch},reservationVm){
        const reservation = reservationVm.reservation;
        const reservationId = reservation.reservationId;
        let checkResult = reservationVm.checkModifyResult ;
        let checkin = checkResult.checkin;
        let checkout = checkResult.checkout;
        let newStatus = mngRes.RMNG_STATUS_MODIFING;

        commit('SET_ERROR',null,fromRoot);
        commit('SET_MESSAGE',null,fromRoot);
        commit('SET_LOADING',true,fromRoot);

        dispatch('updateReservationVm',{reservationVm,newStatus});

        return resource.modifyReservation(reservationId,checkin,checkout)
            .then(res=>{
                try{
                    let updatedReservation = {modifyRequest:res.data.data};
                    dispatch('updateReservation',{reservationVm,updatedReservation});
                    _delay( ()=>{
                        newStatus = mngRes.RMNG_STATUS_MODIFY_SUCCESS;
                        dispatch('updateReservationVm',{reservationVm,newStatus});
                    },200 )

                }catch(e) {
                    Logger.info("[modifyReservation] catch");
                    Logger.error(e);
                    throw e;
                }
                commit('SET_LOADING',false,fromRoot);
                return res;
            }).catch(err=>{
                let message='Network Error' ;
                if(_has(err,"response.data.detail")){
                    message=err.response.data.detail;
                }

                commit('SET_LOADING',false,fromRoot);
                commit('SET_ERROR',err,fromRoot);
                commit('SET_MESSAGE',message,fromRoot);

                _delay( ()=>{
                    const newStatus = mngRes.RMNG_STATUS_MODIFY_ERROR;
                    dispatch('updateReservationVm',{reservationVm,newStatus});
                },200 );

                Logger.error(err);

                return err;
            })
    },
    init({commit,dispatch}){
        Logger.info('reservation init');
    }
};

const getters = {
    actualReservations(state){
        return _sortBy( _filter( state.guestReservations||[], o=>{ return o.reservation?o.reservation.checkin>=today:o.checkin>=today ;   } ) , state.operations.sortBy );
    },
    oldReservations(state){
        return _sortBy( _filter( state.guestReservations||[], o=>{ return o.reservation?o.reservation.checkin<today:o.checkin<today ;   } ) , state.operations.sortBy );
    },
    actualCount:(state,getters)=>getters.actualReservations.length,
    oldCount:(state,getters)=>getters.oldReservations.length,
};


export const reservationStore={
    state,mutations,actions,getters,namespaced:true
};
export default 'reservationStore';

Logger.info('registering reservation');
const store = Vue.$ioc.resolve('store');
store.registerModule('reservation', reservationStore);

store.dispatch('reservation/init',store,{root:true});