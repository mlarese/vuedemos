import Vue from 'vue'
import _extend from 'lodash/extend';
import _each from 'lodash/each';
import resource from './resource';

let Logger = Vue.$ioc.resolve('Logger');
let api = Vue.$ioc.resolve('api');
let fromroot = Vue.$ioc.resolve('const/commitfromroot');

const state = {
    userList:[],
    currentUser:{
    },
    pageTitle:'users',
    pageSubTitle:'Fidelity program manage',
    page:1,
    records:0,
    totUsers:0,
    totGifts:0,
    totCashback:0,
    perPage:7,
    chunk:4,
    order:'default',
    search:'',
    currentUserAnchor:'a-overview',
    userOptions:[],
};

const actions = {
    changeCurrentUserAnchor ({commit,state},anchor){
        commit('SET_CURRENT_USER_ANCHOR',anchor);
    },
    loadUsersOptions({commit,state},q){
        return resource.loadUsersOptions({q})
            .then(res=>{
                let list = res.data.data;
                commit('SET_USER_OPTIONS',list);
                return res;
            }).catch(err=>{

            });
    },
    loadUsers({commit,state}){
        commit('SET_LOADING',true,fromroot);

        const page = state.page;
        const perPage = state.perPage;
        const order = state.order;
        const search = state.search;

        resource.loadUsers({page,perPage,order,search}).then((res) => {
            commit('SET_LOADING',false,fromroot);
            commit('SET_USER_LIST',res.data.data);
            commit('SET_RECORDS',res.data.count);
            commit('SET_TOT_USERS',res.data.totalRecord);

            return res;

        }).catch(  err=>{
            Logger.error('[store startup] getConfig error');
            Logger.error(err);

            commit('SET_LOADING',false,fromroot);
            commit('SET_ERROR',err,fromroot);
            return err;
        });

    }

};
const getters = {

};

const mutations = {
    SET_USER_OPTIONS: (state, payLoad) => state.userOptions = payLoad,
    SET_CURRENT_USER_ANCHOR: (state, payLoad) => {
        state.currentUserAnchor = payLoad
    },
    SET_PAGE(state, payLoad){
        state.page = payLoad;
    },
    SET_ORDER(state, payLoad){
        state.order = payLoad;
    },
    SET_SEARCH(state, payLoad){
        state.search = payLoad;
    },
    SET_CHUNK(state, payLoad){
        state.chunk = payLoad;
    },
    SET_PER_PAGE(state, payLoad){
        state.perPage = payLoad;
    },
    PAGINATE(state, page) {
        state.page = page
    },
    SET_RECORDS(state,payLoad){
        if(!payLoad) payLoad=0;
        state.records = payLoad;
    },
    SET_USER_LIST(state, payLoad){
        state.userList = payLoad;
    },
    SET_CURRENT_USER(state, payLoad){
        state.currentUser = payLoad;
    },
    SET_PAGE_TITLE(state, payLoad){
        state.pageTitle = payLoad;
    },
    SET_PAGE_SUB_TITLE(state, payLoad){
        state.pageSubTitle = payLoad;
    },SET_TOT_USERS(state, payLoad){
        state.totUsers = payLoad;
    }, SET_TOT_CASHBACK(state, payLoad){
        state.totCashback = payLoad;
    }, SET_TOT_GIFTS(state, payLoad){
        state.totGifts = payLoad;
    }

};


export const portal_userStore={
    state,mutations,actions,getters,namespaced:true
};
export default 'portal_userStore';

Logger.info('registering portal_user');

const store = Vue.$ioc.resolve('store');
store.registerModule('portal_user', portal_userStore);