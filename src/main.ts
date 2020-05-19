import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BusPlugin } from './plugins/bus'
import vuetify from './plugins/vuetify'
import { ValidationPlugin } from './plugins/validation'
import { OverlayPlugin } from './plugins/overlay'

Vue.config.productionTip = false

Vue.use(BusPlugin)
Vue.use(ValidationPlugin)
Vue.use(OverlayPlugin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
