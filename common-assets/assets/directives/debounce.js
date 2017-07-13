import Vue from 'vue'
import _debounce from 'lodash/debounce'


const Logger = Vue.$ioc.resolve('Logger');

export const debounce =function(el, binding) {
    const bValue = binding.value||300;
    el.oninput = _debounce(evt=>{ console.log('---debounce',new Date().getTime()); el.dispatchEvent(new Event('change')) }, bValue*1  )
};

Vue.directive('debounce', {  bind:debounce});
Logger.info('added debounce directive');