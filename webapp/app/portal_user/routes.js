import Vue from 'vue'
//import test from '../guest-be/pages/BeGuestPage'

const Home = r=>require.ensure([], () => r(require('./pages/Home')), 'user-view');
const UserListPage = r=>require.ensure([], () => r(require('./pages/users-list/UserListPage')), 'user-view');
const UserDetail = r=>require.ensure([], () => r(require('../guest-be/pages/BeGuestPage')), 'user-view');

export default{
    path: '/home',
    component: Home,
    children:[
        {  name:'home', path:'/',  component: UserListPage },
        {  name:'be-guest', path:'/be-guest',  component: UserDetail }
    ]
};