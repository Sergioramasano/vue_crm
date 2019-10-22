import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Loader from '@/components/app/Loader'

import Vuelidate from 'vuelidate'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.filter('date', dateFilter)
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.component('Loader', Loader)
firebase.initializeApp({
  apiKey: 'AIzaSyA4Djb_N4EcUK33q8KtD9U8nnCCZYsyhu0',
  authDomain: 'homme-account.firebaseapp.com',
  databaseURL: 'https://homme-account.firebaseio.com',
  projectId: 'homme-account',
  storageBucket: 'homme-account.appspot.com',
  messagingSenderId: '938509539478',
  appId: '1:938509539478:web:4346dc6b80c2264054cab7'
})
let app
  firebase.auth().onAuthStateChanged(() => {
    if (!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
  })

