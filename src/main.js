import Vue from 'vue'
import App from './App.vue'
import 'materialize-css'
import './assets/css/materialize.css'
import VueFire from 'vuefire'
import firebase from 'firebase'
import Butter from 'buttercms';

Vue.use(VueFire);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
})
