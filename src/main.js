import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugin/vuetify'
import router from './routes'

Vue.config.productionTip = false

Vue.use(router)

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
