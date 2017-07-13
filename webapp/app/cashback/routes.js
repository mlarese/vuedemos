const RequireCashBack =  r=>require.ensure([], () => r(require('./pages/withdraw/RequireCashBack')), 'cashback');

export default{
    name: 'cashback',
    path: '/cashback',
    component: RequireCashBack
};