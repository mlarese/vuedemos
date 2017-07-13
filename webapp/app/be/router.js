import Vue from 'vue'
import Router from 'vue-router'
import startupRoutes from '../be/startup/routes'
import mainRoutes from '../portal_user/routes'
import store from './store'


const ErrorPage =  r=>require.ensure([], () => r(require('../../assets/pages/Error')), 'error');

let routes = [
    { path: '/', redirect: '/startup' },
    startupRoutes,
    mainRoutes,
    {name:'error', path: '/error', component: ErrorPage}
];

let router = new Router({ mode: 'hash', routes });

router.beforeEach((to, from, next) => {
    store.dispatch('hideMessage');
    if(store.state.started){
        next();
    }else{
        if(to.path=='/' || to.path=='/startup'){
            next();
        }else{
            next('/')
        }
    }
});


export default router;

if(Vue.$ioc)
    Vue.$ioc.register('router',router);