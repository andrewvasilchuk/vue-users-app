import { PluginObject } from 'vue'

export const BusPlugin: PluginObject<never> = {
  install(Vue) {
    Vue.prototype.$bus = new Vue()
  },
}
