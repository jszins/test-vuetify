import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

var config = {
  apiKey: "AIzaSyB6dk2YjR-v-3my7U3pN12X2QZZznZgTgY",
  authDomain: "mnhsl-8af88.firebaseapp.com",
  databaseURL: "https://mnhsl-8af88.firebaseio.com",
  projectId: "mnhsl-8af88",
  storageBucket: "mnhsl-8af88.appspot.com",
  messagingSenderId: "266372283883"
};
firebase.initializeApp(config);
export const db = firebase.firestore()

const settings = { timestampsInSnapshots:true }
db.settings(settings)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
