import Container from './Container';

const container = new Container; // eslint-disable-line
export default {
    install(Vue) {
        Vue.prototype.$ioc = container;
        Vue.$ioc = container;
    },
};
