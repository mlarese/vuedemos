import Vue from 'vue'
import resource from './resource'
import _extend from 'lodash/extend'
import _filter from 'lodash/filter'
import _debounce from 'lodash/debounce'
import _delay from 'lodash/delay'
import _each from 'lodash/each'

import {validators} from 'vue-form/src/validators'

let Logger = Vue.$ioc.resolve('Logger');
let fromRoot = Vue.$ioc.resolve("const/commitfromroot");

const state = {
    list:[],
    current:{},
    orderNote:null,
    canOrder:false,
    guestPrizes:[],
    prizeStates:[
        { value:'w',label:'In attesa di invio'},
        { value:'s',label:'Inviato'},
        { value:'r',label:'Rifiutato'},
    ]
};

const mutations= {
    SET_PRIZE_STATES: (state, payLoad) => state.prizeStates = payLoad,
    SET_LIST(state, payLoad){
        state.list = payLoad;
        state.orderNote=null;
        state.current=null;
    },
    SET_CURRENT(state, payLoad){
        state.current = payLoad;
        state.orderNote=null;
    },
    SET_CAN_ORDER: (state, payLoad) => {
        return state.canOrder = payLoad
    },
    SET_ORDER_NOTE: (state, payLoad) => state.orderNote = payLoad,
    SET_GUEST_PRIZES: (state, payLoad) => state.guestPrizes = payLoad,
};

const preloadImages=(prizes)=>{

    for (let i = 0; i < prizes.length; ++i) {
        let img = new Image();
        img.src = prizes[i]['image'];
    }
}

const actions={
    translateLists({state,commit}){
        const translationFn = Vue.i18n.translate;

        let tPrizeStates = [];
        _each(state.prizeStates      , (v)=> { tPrizeStates.push( {value:v.value,label:translationFn(v.label)}  )           });

        commit('SET_PRIZE_STATES',tPrizeStates);
    },
    sendRefuseMessage({commit,dispatch,state,rootGetters},note){
        alert('Premio Rifiutato '+note)
    },
    changeState({commit,dispatch,state,rootGetters},prize){
         return resource.changeState(prize.id,{status:prize.status,note:''})
    },
    loadUserPrizes({commit,dispatch,state,rootGetters},guestId=null){

        if(guestId===null || guestId===0){
            let guest = rootGetters['guest/currentGuest'];
            guestId=guest.id;
        }
        commit('SET_ERROR',{},fromRoot) ;
        commit('SET_MESSAGE',null,fromRoot) ;
        commit('SET_LOADING',true,fromRoot);
        let error="Server error";

        return resource.loadList(guestId)
            .then(res=>{
                let data;
                if(res.data.data) data = res.data.data;
                else data = res.data;

                commit('SET_GUEST_PRIZES',data);
                commit('SET_LOADING',false,fromRoot);

                return res;
            })
            .catch(err=>{
                let errorMsg='Server error';
                commit('SET_ERROR',err,fromRoot) ;
                commit('SET_MESSAGE',errorMsg,fromRoot) ;
                commit('SET_LOADING',false,fromRoot);
                Logger.error(err);

                return err;
            })
    },
    loadList({commit,dispatch,state,rootGetters}){
        commit('SET_MESSAGE',null,fromRoot) ;
        commit('SET_ERROR',{},fromRoot) ;
        commit('SET_LOADING',true,fromRoot);
        let error="Server error";

        return resource.loadList()
            .then(res=>{
                let data;
                if(res.data.data) data = res.data.data;
                else data = res.data;

                preloadImages(data);
                commit('SET_LIST',data);

                _delay(()=>{  commit('SET_LOADING',false,fromRoot);   }, 700);

                return res;
            })
            .catch(err=>{
                let errorMsg='Server error';
                commit('SET_MESSAGE',errorMsg,fromRoot) ;
                commit('SET_ERROR',err,fromRoot) ;
                commit('SET_LOADING',false,fromRoot);

                if(console){
                    console.log( '' );
                    console.dir(err);
                }else
                    Logger.error(err);

                return err;
            })
    },
    selectPrize:    ({commit,dispatch,rootState },prize)=> {
        commit('SET_LOADING',true,fromRoot);
        commit('SET_MESSAGE',null,fromRoot) ;
        commit('SET_ERROR',{},fromRoot) ;
        return resource.loadPrize(prize.id)
            .then(res=>{
                let data = _extend({},res.data);
                if(!data.id) data.id = prize.id;
                commit('SET_CURRENT',data)
                commit('SET_LOADING',false,fromRoot);
            }).catch(err=>{
                let errorMsg = "Server error"
                commit('SET_MESSAGE',errorMsg,fromRoot) ;
                commit('SET_LOADING',false,fromRoot);
                commit('SET_ERROR',err,fromRoot) ;
                Logger.error(err);
                return err;
            });
    },
    canOrder({state,commit,rootState}){
        const current = state.current || {};
        const shData = rootState.guest.shippingData;
        let canOrder = true;

        if(!shData.surname)     canOrder = false;
        else if(!shData.fullname)  canOrder = false;
        else if(!shData.city)  canOrder = false;
        else if(!shData.zipcode)  canOrder = false;
        else if(!shData.address)  canOrder = false;
        else if(!shData.country)  canOrder = false;
        else if(!shData.email)  canOrder = false;
        else if(  !validators.email(shData.email) )  canOrder = false;

        if( current.additionalDescription &&  current.additionalDescription!==''){
            if(!state.orderNote)  canOrder = false;
        }

        commit("SET_CAN_ORDER",canOrder);

    },
    unselectPrize:  ({commit,dispatch})=> commit('SET_CURRENT',{}),
    blankList:({commit,dispatch})=> commit('SET_LIST',[]),
    requirePrize({state,commit,dispatch,rootState,getters} ){
        if(!state.canOrder) return false;
        if(!state.current.id) return false;
        if(!state.current.selectable) return false;

        commit('SET_MESSAGE',null,fromRoot) ;
        commit('SET_ERROR',{},fromRoot) ;
        commit('SET_LOADING',true,fromRoot);

        let { telephone,fullname, surname, email, address, city, country, zipcode  } = getters.shipping;
        const note = state.orderNote ||'';

        let data = _extend({}, {phone:telephone, name:fullname, surname, email, address, city, country, zipcode ,note });

        Logger.info("--- call requiredPrize")
        return  resource.requirePrize(state.current.id,data)
                .then(res=>{
                    commit('SET_LOADING',false,fromRoot);
                    Logger.info("--- call requiredPrize success",res)
                    return res;
                }).catch(err=>{
                    console.dir(err);
                    commit('SET_LOADING',false,fromRoot);
                    commit('SET_MESSAGE',"Errore nella richiesta premio",fromRoot);
                    commit('SET_ERROR',err,fromRoot) ;
                    return err;
                });

    },
    init({commit,dispatch,rootState,getters},store){
        Logger.info('prize init');
        store.watch( state=>getters.orderDataStr, _debounce((state)=>{dispatch('canOrder')},500));
    }
};

const getters = {
    shipping(state, getters, rootState){
        return rootState.guest.shippingData;
    },
    orderDataStr(state, getters, rootState){
        let res='';
        for(let key in rootState.guest.shippingData)
            res+='@@'+rootState.guest.shippingData[key];
        if(state.orderNote)
            res+='-'+state.orderNote;
        if(state.current && state.current.additionalDescription){
            res+= '-' + state.current.additionalDescription;
        }

        return res;
    },
    current:            state => state.current,
    guestPrizes:        state => state.guestPrizes,
    guestPrizesSent:    state => _filter(state.guestPrizes,{'status': 's'}) ,
    guestPrizesWaiting: state => _filter(state.guestPrizes,{'status': 'w'}) ,
    getAvailable:       state => _filter(state.list,{'selectable': true}) ,
    getNotAvailable:    state => _filter(state.list,{'selectable': false})
};

export const prizeStore={
    state,mutations,actions,getters,namespaced:true
};
export default 'prizeStore';

Logger.info('registering prize');

const store = Vue.$ioc.resolve('store');
store.registerModule('prize', prizeStore);

store.dispatch('prize/init',store,{root:true});