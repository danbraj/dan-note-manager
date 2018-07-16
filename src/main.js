import Vue from 'vue'
import App from './App.vue'
import Main from './Components/Main.vue'

Vue.component('app-main', Main);

new Vue({
  el: '#app',
  render: h => h(App)
})
