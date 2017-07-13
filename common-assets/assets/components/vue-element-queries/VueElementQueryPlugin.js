import VueElementQuery from './VueElementQuery'
import ResizeSensor from 'css-element-queries/src/ResizeSensor'

export default {
  install (Vue, state) {
    Vue.directive('query', {
      inserted (element) {
        new VueElementQuery(ResizeSensor, element,state)
      },
      unbind (element) {
        ResizeSensor.detach(element)
      }
    })
  }
}
