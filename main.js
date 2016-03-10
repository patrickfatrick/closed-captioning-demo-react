import Vue from 'vue'
import Vuex from 'vuex'
import App from './public/App.vue'
import store from './public/store/'

// Debug mode. Turned off in production builds
Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

var app = new Vue({
  store,
  components: {
    App
  }
})

app.$mount('body')
