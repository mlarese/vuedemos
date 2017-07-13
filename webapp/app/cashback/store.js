import Vue from 'vue'
import resource from './resource'
import _extend from 'lodash/extend'
import _find from 'lodash/find'
import _filter from 'lodash/filter'
import _has from 'lodash/has'
import iban from 'iban'

let Logger = Vue.$ioc.resolve('Logger');

const state = {
    recipient:{
        name:null,
        surname:null,
        country:null,
        iban:null,
        note:'',
    },
    withdrawAmount:0,
    transferList:[],
    minAmount:100,
    summary:{
        accreditCashback:0,
        balanceCashback:0,
        earnedCashback:0,
        usedCashback:0
    },
    //list of customer's cashback requests
    requestList:[],
    cashbackStates:[
        { value:'u',label:'In attesa'},
        { value:'d',label:'Iban errato'},
        { value:'t',label:'Effettuato'},
    ],
    //object from request list
    requestItem:{
        id:null,
        requestDate:null,
        elaborationDate:null,
        amount:0,
        status:null,
        description:null,
        done:false,
        errorDescription:null,
        error:false,
        recipient:{
            name:null,
            surname:null,
            country:null,
            iban:null,
            note:'',
        }
    }
}

const fromroot = {root:1};
const mutations={
    SET_CASHBACK_STATES: (state, payLoad) => state.cashbackStates = payLoad,
    SET_REQUEST_ITEM: (state, payLoad) => state.requestItem = payLoad,
    SET_REQUEST_LIST: (state, payLoad) => state.requestList = payLoad,
    SET_TRANSFER_LIST: (state, payLoad) => state.transferList = payLoad,
    SET_SUMMARY: (state, payLoad) => state.summary = payLoad,
    SET_WITHDRAW_AMOUNT: (state, payLoad) => state.withdrawAmount = payLoad,
    SET_RECIPIENT: (state, payLoad) => {
        state.recipient = payLoad
    },
    AUTOCALC_WITHDRAW_AMOUNT (state){
        if(state.summary.balanceCashback>=state.minAmount){
            state.withdrawAmount = state.summary.balanceCashback
        }else{
            state.withdrawAmount = 0;
        }

    },
    SET_MIN_AMOUNT: (state, payLoad) => state.minAmount = payLoad
};
const actions={
    translateLists({state,commit}){
        const translationFn = Vue.i18n.translate;

        let tStates = [];
        _each(state.cashbackStates      , (v)=> { tStates.push( {value:v.value,label:translationFn(v.label)}  )           });

        commit('SET_CASHBACK_STATES',cashbackStates);
    },
    /**
     * Load guest cashback requests, pending and approved
     * @param commit
     * @param state
     * @param rootGetters
     * @param guestId
     */
    loadRequests({commit,state,rootGetters},guestId=0){
        commit('SET_LOADING',true,fromroot);

        if(!guestId || guestId===0){
            let guest = rootGetters['guest/currentGuest'];
            guestId=guest.id;
        }

        resource.loadRequests(guestId)
            .then(res=>{
                let data={history:[],recap:{}};
                if(res.data && res.data.data)
                    data = res.data.data;
                else
                    data = res.data ;

                let {history,recap}=data;

                commit('SET_LOADING',false,fromroot);
                commit('SET_SUMMARY',recap);
                commit('SET_REQUEST_LIST',history);
            }).catch(err=>{
                commit('SET_LOADING',false,fromroot);
                console.dir(err);
            });


    },
    load({commit,state,rootGetters} ){
        commit('SET_LOADING',true,fromroot);
        resource.load( )
            .then(res=>{
                let data={history:[],recap:{}};
                if(res.data && res.data.data)
                    data = res.data.data;
                else
                    data = res.data ;

                let {history,recap}=data;

                commit('SET_LOADING',false,fromroot);
                commit('SET_SUMMARY',recap);
                commit('SET_TRANSFER_LIST',history);
                commit('AUTOCALC_WITHDRAW_AMOUNT');
            }).catch(err=>{
                commit('SET_LOADING',false,fromroot);
                console.dir(err);
            });
    },

    sendCashback({commit,state,getters,rootState,rootGetters  }){
            alert("sendCashback")
    },
    withdraw({commit,state,getters,rootState,rootGetters  }){
        let data = _extend({},state.recipient,{value: state.withdrawAmount});
        if(data.note===null)
            data.note='';

        commit('SET_LOADING',true,fromroot);
        commit('SET_MESSAGE',null,fromroot);
        commit('SET_ERROR',{},fromroot);

        resource.withdraw(data)
            .then(res=>{
                let {history,recap}=res.data;
                commit('SET_LOADING',false,fromroot);
                commit('SET_SUMMARY',recap);
                commit('SET_TRANSFER_LIST',history);
                commit('AUTOCALC_WITHDRAW_AMOUNT');

                commit('SET_MESSAGE','Operazione eseguita con successo',fromroot);
            }).catch(err=>{
                let msg='Si è verificato un errore';
                commit('SET_LOADING',false,fromroot);

                if( _has(err,'response.data.validation_messages')  ){
                    let errors = err.response.data.validation_messages;
                    //console.dir(errors)
                    if(errors['iban'])
                        msg = 'Errore contralla il codice IBAN'
                }

                commit('SET_ERROR',err,fromroot);
                commit('SET_MESSAGE',msg,fromroot);
            });
    }
};

const getters={
    pendingRequests:state=>_filter(state.requestList,{status:'u'}),
    elaboratedRequests:state=>_filter(state.requestList,o=>(o.status==='t' || o.status==='d' || o.status==='r'  )),
    requestList:state=>state.requestList,
    transferList:state=>state.transferList,
    recipientIsCompiled(state,getters){
        if(!state.recipient.name) return false;
        if(!state.recipient.surname) return false;
        if(!state.recipient.country) return false;
        if(  !getters.isIbanValid   ) return false;

        return true;
    },
    wdAmountIsValid(state){
        return (
            state.withdrawAmount>=state.minAmount &&
            state.withdrawAmount<=state.summary.balanceCashback
        )
    },
    canWithDraw(state, getters, rootState, rootGetters){
        return (
            getters.wdAmountIsValid &&
            getters.isCashbackEnough &&
            getters.recipientIsCompiled
        ) ;
    },
    isIbanValid(state, getters, rootState, rootGetters){
        if(!state.recipient.iban ) return false;
        return  iban.isValid( state.recipient.iban )
    },
    isIbanEmpty(state, getters, rootState, rootGetters){
        if(!state.recipient.iban || state.recipient.iban==='' ) return true;
        return  false;
    },
    isCashbackEnough(state){
        return (state.summary.balanceCashback>=state.minAmount);
    }
};


export const cashbackStore={
    state,mutations,actions,getters,namespaced:true
};
export default 'cashbackStore';

Logger.info('registering cashback');
const store = Vue.$ioc.resolve('store');

store.registerModule('cashback', cashbackStore);