import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuelidate from 'vuelidate'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
Vue.filter('date', dateFilter)
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
