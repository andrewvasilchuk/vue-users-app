import { PluginObject } from 'vue'
import { rules } from './rules'

export const ValidationPlugin: PluginObject<never> = {
  install(Vue) {
    Vue.prototype.$rules = rules
  },
}
