import Vue from 'vue'
import Vuex from 'vuex'
import App from './public/App.vue'
import store from './public/store/'

// Debug mode. Turned off in production builds
Vue.config.debug = process.env.NODE_ENV !== 'production'

// Start Vuex (Flux)
Vue.use(Vuex)

// Create the app, instantiate the store
var app = new Vue({
  store,
  components: {
    App
  }
})

// Mount the app
app.$mount('body')
