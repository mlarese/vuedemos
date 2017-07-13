import Vue from 'vue'
import prizeRoutes from '../prize/routes'
import cashbackRoutes from '../cashback/routes'

const CompleteLayout = r=>require.ensure([], () => r(require('./pages/UserCompleteLayout')), 'profile-view');
const ClientReservationListPage =  r=>require.ensure([], () => r(require('../reservation/pages/client-reservation-list-page/ClientReservationListPage')), 'reservation');
const Edit =  r=>require.ensure([], () => r(require('./pages/Edit')), 'profile-edit');
const Home =  r=>require.ensure([], () => r(require('./pages/Home')), 'profile-home');
const ClientUserFidelity =  r=>require.ensure([], () => r(require('./pages/client-user-fidellity/ClientUserFidelity')), 'fidelity');

export default{
    path: '/home',
    component: CompleteLayout,
    children:[
        {  name:'home',path:'/home',  component: Home },
        {  name:'reservations' , path:'/reservations',  component: ClientReservationListPage },
        {  name:'help-messages' , path:'/help-messages',  component: Home },
        {  name:'points' , path:'/points',  component: ClientUserFidelity },
        prizeRoutes,
        cashbackRoutes,
        {  name:'edit-profile' , path:'/edit-profile',  component: Edit }
    ]
};