import Vue from 'vue'
import _extend from 'lodash/extend';
import _each from 'lodash/each';
import _get from 'lodash/get'
import _isEqual from 'lodash/isEqual'
import resource from './resource';
import moment from 'moment'

let Logger = Vue.$ioc.resolve('Logger');
let api = Vue.$ioc.resolve('api');
let Rules = Vue.$ioc.resolve('Rules');
let fromRoot =  { root: true };

const SET_GENDER_OPTIONS = 'SET_GENDER_OPTIONS';
const SET_TRAVEL_WITH_OPTIONS = 'SET_TRAVEL_WITH_OPTIONS';
const SET_CURRENT_GUEST='SET_CURRENT_GUEST';
const SET_EDIT_GUEST='SET_EDIT_GUEST';
const SET_MENU='SET_MENU';
const SET_LABELS='SET_LABELS';
const SET_LANGUAGE='SET_LANGUAGE';

const travelWithOptions = [
    {label:"single traveller",value:"single traveller"},
    {label:"young couple",value:"young couple"},
    {label:"mature couple",value:"mature couple"},
    {label:"family with young children",value:"family with young children"},
    {label:"family with older children",value:"family with older children"},
    {label:"with friends",value:"with friends"}
];
const genderOptions =[
    {value:'m',label:'m'},
    {value:'f',label:'f'}
];

const fidelityStatus ={
    c:{value:'c', code : 'credit',label:'punti in attesa di accredito'},
    e:{value:'e', code : 'earned',label:'punti maturati'},
    u:{value:'u', code : 'used',label:'richiesta premio'},
    t:{value:'t', code : 'take',label:'il premio verrà inviato'},
    d:{value:'d', code : 'deny',label:'richiesta premio negata'},
    r:{value:'r', code : 'removed',label:'operazione rimossa'}
};

const state = {
    fidelityStatus,
    fidelity:{  "recap": { "earnedPoints": 0, "usedPoints": 0, "balancePoints": 0, "accreditPoints": 0 }, "history": [] },
    genderOptions:[],
    travelWithOptions:[],
    menu:[],
    currentGuest:{},
    editGuest:{},
    shippingData:{},
    formEditMode:'view',
};

const actions = {
    getProfile({commit,state}){
        commit('SET_MESSAGE',null,fromRoot) ;
        commit('SET_LOADING',true,fromRoot);
        commit('SET_ERROR',{},fromRoot);

        return resource.getProfile()
            .then(res=>{
                commit('SET_CURRENT_AND_EDIT_GUEST',res.data.profile);
                commit('SET_LOADING',false,fromRoot);
                return res;
            })
            .catch(err=>{
                let errorMsg = 'ServerError';
                commit('SET_MESSAGE',errorMsg,fromRoot) ;
                commit('SET_LOADING',false,fromRoot);
                Logger.error(err);
                return err;
            });
    },
    modeView({commit,state}){
        commit('SET_FORM_EDIT_MODE','view');
        commit('SET_SHOW_MODAL_MASK',false,fromRoot);
    },
    modeEdit({commit,state}){
        commit('SET_EDIT_GUEST_CURRENT');
        commit('SET_FORM_EDIT_MODE','edit');
        commit('SET_SHOW_MODAL_MASK',true,fromRoot);
    },
    updateUserCode(){

    },
    selectCurrentGuest({dispatch,commit,state},currentGuest){
        commit(SET_CURRENT_GUEST,_extend({}, currentGuest));
        commit('SET_EDIT_GUEST', _extend({}, currentGuest ));
        dispatch('modeView');
        dispatch('hideMessage',null,{root:1});

        return dispatch('getFidelity',0);
    },
    cancelUserData({commit,state}){
        commit(SET_EDIT_GUEST,_extend({},state.currentGuest));
    },
    getFidelity({commit,state},userId=null){
        commit('SET_MESSAGE',null,fromRoot) ;
        commit('SET_LOADING',true,fromRoot);
        commit('SET_ERROR',{},fromRoot);

        //use currentGuest
        if(userId===0)
            userId = state.currentGuest.id

        return resource.getFidelity(userId)
            .then(res=>{
                let fid = {};
                if(res.data.data)
                    fid = res.data.data;
                else if(res.data)
                    fid = res.data;

                commit('SET_LOADING',false,fromRoot);
                commit('SET_FIDELITY',fid);

                return res;
            })
            .catch(err=>{
                let errorMsg = 'ServerError';
                commit('SET_MESSAGE',errorMsg,fromRoot) ;
                commit('SET_LOADING',false,fromRoot);
                Logger.error(err);

                return err;
            })
    },
    setShippingDataDefault({commit,state,dispatch},force=false){
        if(!force){
            if(state.shippingData.code){
                return;
            }
        }
        const sd =  _extend({country:'it'},state.currentGuest);
        commit('SET_SHIPPING_DATA',sd);

    },
    setRecipientDefault({commit,state,dispatch,rootGetters , rootState },force=false){
        if(!rootState.cashback || !rootState.cashback.recipient)
            return;

        if(!force){
            if(rootState.cashback.recipient.name){
                return;
            }
        }
        let {fullname,surname}=state.currentGuest;

        const sd =  _extend({},{name:fullname,surname,country:'it',iban:null,note:null});
        commit('cashback/SET_RECIPIENT',sd,fromRoot);

    },
    resetShippingData({commit,state,dispatch}){
        const sd = {};
        commit('SET_SHIPPING_DATA',sd);
    },
    updateEditGuest({commit},editGuest){
        commit('SET_EDIT_GUEST',editGuest);
    },
    updateUserData({commit,state,dispatch}){
        let updateData = state.editGuest;

        commit('SET_MESSAGE',null,fromRoot) ;
        commit('SET_LOADING',true,fromRoot);

        return resource.updateData(updateData)
            .then(resp=>{
                let errorMsg = '';
                if(resp && resp.data){
                    let serverResponse = resp.data;

                    if(serverResponse.success) {
                        commit('SET_CURRENT_GUEST',state.editGuest);
                    }else{
                        errorMsg = serverResponse.message;
                    }
                }else{
                    errorMsg = 'Server error'
                };

                if(errorMsg!=''){
                    errorMsg = Vue.i18n.translate(errorMsg);
                    commit('SET_MESSAGE',errorMsg,fromRoot) ;
                }

                commit('SET_LOADING',false,fromRoot);
                return resp;
            }).catch((serverError)=>{
                let errorMsg = '';

                if(serverError.response && serverError.response.data && serverError.response.data.validation_messages ) {
                    let serverResponse=serverError.response.data;
                    let errors = serverResponse.validation_messages.data;

                    for (let error in errors) {
                        let translatedFieldName = '<strong>'+Vue.i18n.translate(error)+'</strong>';
                        let validations = errors[error];
                        errorMsg += translatedFieldName;
                        for (let validation in validations) {
                            let translatedValidation = Vue.i18n.translate(validations[validation]);
                            errorMsg += '<br>     ' + translatedValidation;
                        }
                    }
                }else{
                    errorMsg='Server Error';
                }

                commit('SET_MESSAGE',errorMsg,fromRoot) ;
                commit('SET_LOADING',false,fromRoot);


                return serverError;
            });
    },
    translateLists({state,commit}){
        const translationFn = Vue.i18n.translate;

        let gopt = [];
        let topt = [];
        _each(genderOptions      , (v)=> { gopt.push( {value:v.value,label:translationFn(v.label)}  )           });
        _each(travelWithOptions  , (v)=> { topt.push( {value:v.value,label:translationFn(v.label)}  )       });

        Logger.info('[guest store]', 'translating genderOptions,travelWithOptions ' );

        commit(SET_GENDER_OPTIONS,gopt);
        commit(SET_TRAVEL_WITH_OPTIONS,topt);

    },
    init({commit,dispatch,rootState,getters},store){
        Logger.info('guest init');

        /**
         * update shippingData and recipient on currentGuest change
         */
        store.watch(state=> getters.currentGuest,()=>{
            dispatch('setShippingDataDefault');
            dispatch('setRecipientDefault');
        });
    }
};
const getters = {
    //---------- current guest
    currentGuestCashback:state=>_get(state.currentGuest,'cashback',{}),
    currentGuestFidelity:state=>_get(state.currentGuest,'fidelity',{}),
    currentGuestEarnedCashback:state=>_get(state.currentGuest,'cashback.earned',0),
    currentGuestEarnedGifts:state=>_get(state.currentGuest,'fidelity.earned',0),
    currentGuestHasEarnedCashback:getters=> (getters.currentGuestEarnedCashback >0),
    currentGuestHasEarnedGift:getters=> (getters.currentGuestEarnedGifts >0),
    currentGuest:state=>state.currentGuest,

    getGenderOptions(state){
        return state.genderOptions;
    },
    getTravelWithOptions(state){
        return state.travelWithOptions;
    },
    getEditGuest:state=>state.editGuest,
    canUpdateEditGuest:(state,getters)=>(getters.isDirtyEditGuest && getters.isValidEditGuest),
    isDirtyEditGuest:state=>!_isEqual(state.currentGuest,state.editGuest),
    validationEditGuest(){
        return{
            fullname:Rules.required(state.editGuest.fullname)  ,
            surname:Rules.required(state.editGuest.surname)  ,
            telephone:Rules.required(state.editGuest.telephone)  ,
            date_of_birth:  (
                    Rules.required(state.editGuest.date_of_birth)  &&
                    moment(state.editGuest.date_of_birth, 'DD-MM-YYYY', true).isValid()
            ) ,
            email:(Rules.required(state.editGuest.email) && Rules.email(state.editGuest.email)) ,
            city:Rules.required(state.editGuest.city)  ,
            address:Rules.required(state.editGuest.address) ,
            zipcode:Rules.required(state.editGuest.zipcode) ,
        }
    },
    isValidEditGuest(state){
        if( !Rules.required(state.editGuest.fullname)  ) return false;
        if( !Rules.required(state.editGuest.surname)  ) return false;
        if( !Rules.required(state.editGuest.telephone)  ) return false;
        if( !Rules.required(state.editGuest.date_of_birth)  || !moment(state.editGuest.date_of_birth, 'DD-MM-YYYY', true).isValid()  )   return false;
        if( !Rules.required(state.editGuest.email) || !Rules.email(state.editGuest.email) ) return false;

        if( !Rules.required(state.editGuest.city)  ) return false;
        if( !Rules.required(state.editGuest.address)  ) return false;
        if( !Rules.required(state.editGuest.zipcode)  ) return false;

        return true;
    },
};

const mutations = {
    SET_EDIT_GUEST_CURRENT(state){
        state.editGuest = _extend({}, state.currentGuest );
    },
    SET_CURRENT_AND_EDIT_GUEST(state, payLoad){
        state.currentGuest = payLoad;
        state.editGuest = _extend({}, payLoad );
    },
    [SET_CURRENT_GUEST](state, payLoad){
        state.currentGuest = payLoad;
    },
    [SET_EDIT_GUEST](state, payLoad){
        state.editGuest = payLoad;
    },
    [SET_MENU](state, payLoad){
        state.menu = payLoad;
    },
    [SET_GENDER_OPTIONS](state, payLoad){
        state.genderOptions = payLoad;
    },
    [SET_TRAVEL_WITH_OPTIONS](state, payLoad){
        state.travelWithOptions = payLoad;
    },
    SET_FIDELITY(state, payLoad){
        state.fidelity = payLoad;
    },
    SET_SHIPPING_DATA(state, payLoad){
        state.shippingData = payLoad;
    },
    SET_FORM_EDIT_MODE(state, payLoad){
        state.formEditMode = payLoad;
    },
};

export const guestStore={
    state,mutations,actions,getters,namespaced:true,
};

Logger.info('registering guest');
const store = Vue.$ioc.resolve('store');

store.registerModule('guest', guestStore);
store.dispatch('guest/init',store,{root:true});

export default 'guestStore';