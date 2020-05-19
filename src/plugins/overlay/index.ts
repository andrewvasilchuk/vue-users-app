import { PluginObject } from 'vue'

export const OverlayPlugin: PluginObject<never> = {
  install(Vue) {
    Vue.prototype.$overlay = Vue.observable({ value: false })
  },
}
