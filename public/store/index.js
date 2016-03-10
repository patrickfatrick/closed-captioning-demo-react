import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
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
