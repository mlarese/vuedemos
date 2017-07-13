import Vue from 'vue'

const ThxPrize =  r=>require.ensure([], () => r(require('./pages/require-prize/ThxPrize')), 'prize');
const DetailedPrize =  r=>require.ensure([], () => r(require('./pages/require-prize/DetailedPrize')), 'prize');
const RequestedPrize =  r=>require.ensure([], () => r(require('./pages/require-prize/RequestedPrize')), 'prize');
const RequirePrizePage =  r=>require.ensure([], () => r(require('./pages/require-prize/RequirePrizePage')), 'prize');
const Container =  r=>require.ensure([], () => r(require('../../../assets/Container')), 'container');

export default{
    path: '/gift',
    component: Container,
    children:[
        {  name:'gift' , path:'',  component: RequirePrizePage },
        {  name:'gift-request' , path:'/gift/request',  component: RequestedPrize },
        {  name:'gift-detail' , path:'/gift/detail',  component: DetailedPrize },
        {  name:'gift-thx' , path:'/gift/thx',  component: ThxPrize }
    ]
};