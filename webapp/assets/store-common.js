export const SET_LOADING = 'SET_LOADING';
export const SET_STARTED = 'SET_STARTED';
export const SET_LIST = 'SET_LIST';
export const SET_CURRENT = 'SET_CURRENT';
export const SET_STATUS= 'SET_STATUS';
export const SET_ERROR= 'SET_ERROR';

export const state = {
    loading:false,
    started:false,
    list:[],
    current:null,
    status:'view',
    error:false
};

export const mutations = {
    [SET_LOADING](state,payLoad){
        state.loading=payLoad;
    },
    [SET_STARTED](state,payLoad){
        state.started=payLoad;
    },
    [SET_LIST](state,payLoad){
        state.list=payLoad;
    },
    [SET_CURRENT](state,payLoad){
        state.current=payLoad;
    },
    [SET_STATUS](state,payLoad){
        state.status=payLoad;
    },
    [SET_ERROR](state, payLoad){
        state.error = payLoad;
    }
};