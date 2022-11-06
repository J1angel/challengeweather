import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugin/vuetify'
import router from './routes'
import store from '@/store';

Vue.config.productionTip = false

Vue.use(router)
Vue.use(require('vue-moment'))

Vue.component('nav-bar', require('./components/NavigationBar.vue').default);

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
