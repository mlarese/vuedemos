import Vue from 'vue'
import resource from './resource';
import _has from 'lodash/has'
import _bind from 'lodash/bind'
import _extend from 'lodash/extend'
import _size from 'lodash/size'
import _isPlainObject from 'lodash/isPlainObject'
import _isError from 'lodash/isError'
import _delay from 'lodash/delay'

const FREQUENT_GUEST_CLIENT_INITIAL_DATA ='fr-gu-fe-initial-data';
let Logger = Vue.$ioc.resolve("Logger");
let language = Vue.$ioc.resolve("const/language");
let fromRoot = Vue.$ioc.resolve("const/commitfromroot");
let localStorage = Vue.$ioc.resolve("localStorage");

let initialState = localStorage.get(FREQUENT_GUEST_CLIENT_INITIAL_DATA);

export const state = {
    multiLoading:false,
    loading:false,
    starting:false,
    started:false,
    error:{},
    labels:{},
    successRoute:'/home',
    language:'en',
    message:null,
    system:{},
    storeName:'fgfe',
    template:{},
    showModalMask:false,
};

export const mutations = {
    SET_SHOW_MODAL_MASK: (state, payLoad) => state.showModalMask = payLoad,
    SET_TEMPLATE: (state, payLoad) => state.template = payLoad,
    SET_STARTING: (state, payLoad) => state.starting = payLoad,
    SET_MULTI_LOADING: (state, payLoad) => state.multiLoading = payLoad,
    SET_ERROR(state, payLoad){
        state.error = payLoad;
    },
    SET_SYSTEM(state, payLoad){
        state.system = payLoad;
    },
    'SET_LOADING'(state, payLoad){
        state.loading = payLoad;
    },
    'SET_STARTED'(state, payLoad){
        state.started = payLoad;
    },
    'SET_LABELS'(state, payLoad){
        state.labels = payLoad;
    },
    'SET_LANGUAGE'(state, payLoad){
        state.language = payLoad;
    },
    'SET_MESSAGE'(state, payLoad){
        state.message = payLoad;
    },
    IS_LOADING_INITIAL_STATE(state,{loading,started}) {
        state.loading=loading;
        state.started=started;
        state.starting=loading;
    },
};


export const actions = {
    init({commit, dispatch}){
            
    },
    hideMessage({commit,dispatch,state}){
        commit('SET_MESSAGE',null)
    },

    getConfig({commit,dispatch,state}){
        const commitInitialState=({label,system,menu,template,profile,language})=>{
            commit('SET_LABELS',label);
            commit('SET_SYSTEM',system||{reservation_link:''});
            commit('guest/SET_MENU',menu);
            commit('guest/SET_CURRENT_AND_EDIT_GUEST',profile);
            commit('SET_TEMPLATE',template);

            Logger.info('set locale to '+ language);
            commit('SET_LANGUAGE',language);
            Vue.i18n.add(  language, label);
            Vue.i18n.set( language);
        };
        /**
         * onSuccess
         * resource.getConfig success callback
         * @param res
         * @returns {*}
         */
        const onSuccess =(res)=>{
            commitInitialState({...res.data,language});
            dispatch('guest/translateLists');
            localStorage.set(FREQUENT_GUEST_CLIENT_INITIAL_DATA,res);
            return res;    
        };

        commit('IS_LOADING_INITIAL_STATE',{loading:true,started:false});

        /**
         * If cached initialState
         *      -   commit to the store
         *      -   reload original state in background after 1sec
         */
        if(initialState && _has(initialState,'data')){
            Logger.info("[setting initial state]");
            commitInitialState({...initialState.data,language});
            commit('IS_LOADING_INITIAL_STATE',{loading:false,started:true});

            _delay(()=>{   resource.getConfig().then(onSuccess);   },1000);

            return Promise.resolve( initialState ) ;
        };

        return resource.getConfig()
            .then(onSuccess)    
            .then(res=> {
                commit('IS_LOADING_INITIAL_STATE',{loading:false,started:true});
                return res;
            })
            .catch(  err=>{
                commit('SET_ERROR',err);
                commit('IS_LOADING_INITIAL_STATE',{loading:false,started:false});
    
                if(console && console.dir) console.dir(err);
                else Logger.error(err);

                return err;
            });

    }
};

export const getters = {
    hasError:state=>(state.error!==null && _size(state.error) >0 ),
    isLoading(state){
        if(state.multiLoading)
            return state.multiLoading;
        return state.loading
    }
};