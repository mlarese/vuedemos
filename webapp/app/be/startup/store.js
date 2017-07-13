import Vue from 'vue'
import resource from './resource';
import _bind from 'lodash/bind'
import _extend from 'lodash/extend'
import _size from 'lodash/size'

let Logger = Vue.$ioc.resolve("Logger");
let language = Vue.$ioc.resolve("const/language");
let fromRoot = Vue.$ioc.resolve("const/commitfromroot");

export const state = {
    debugMode:true,
    multiLoading:false,
    loading:false,
    started:false,
    error:{},
    labels:{},
    successRoute:'/home',
    language:'en',
    message:null,
    queryElements:{},
    storeName:'fgbe',
};

export const mutations = {
    SET_MULTI_LOADING: (state, payLoad) => {
        state.multiLoading = payLoad;
    },
    SET_ERROR(state, payLoad){
        state.error = payLoad;
    },
    SET_LOADING(state, payLoad){
        state.loading = payLoad;
    },
    SET_STARTED(state, payLoad){
        state.started = payLoad;
    },
    SET_LABELS(state, payLoad){
        state.labels = payLoad;
    },
    SET_LANGUAGE(state, payLoad){
        state.language = payLoad;
    },
    SET_MESSAGE(state, payLoad){
        state.message = payLoad;
    },
    SET_QUERY_ELEMENT(state, {id,maxWidth,minWidth}){
        state.queryElements[id] = {id,maxWidth,minWidth} ;
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

export const actions = {
    init({commit, dispatch}){
            
    },
    hideMessage({commit,dispatch,state}){
        commit('SET_MESSAGE',null)
    },

    getConfig({commit,dispatch,state}){
        commit('SET_LOADING',true);
        commit('SET_ERROR',null);

        Logger.info('[store startup be] getConfig');

        return resource.getConfig().then((res) => {
            Logger.info('[store startup] getConfig then');
            let {label,profile} = res.data;

            commit('SET_LABELS',label);
            commit('portal_user/SET_CURRENT_USER', _extend({}, profile ));

            commit('SET_LANGUAGE',language);

            Vue.i18n.add( state.language, label);
            Vue.i18n.set(state.language);

            Logger.info('set locale to '+ state.language);

            dispatch('guest/translateLists');
            dispatch('prize/translateLists');

            commit('SET_STARTED',true);
            commit('SET_LOADING',false);
            return res;
 
        }).catch(  err=>{
            Logger.error('[store startup] catch getConfig error');
            Logger.error(err);

            commit('SET_LOADING',false);
            commit('SET_ERROR',err);
            return err;
        });

    }
};

Logger.info('store startup ');