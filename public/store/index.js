import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

// Store
export default new Vuex.Store({
  // This throws an error when trying to mutate state outside of a mutation,
  // only in development
  strict: process.env.NODE_ENV === 'development',
  state: {
    captionsOn: false,
    captions: [],
    scroll: false,
    video: {
      timestamp: 0,
      caption: 0
    }
  },
  mutations: mutations
})
