import Footer from './footer/index'

function components(Vue) {
  if (components.installed) {
    return
  }
  Vue.component('v-footer', Footer)
}
export default components
