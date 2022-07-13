import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vueLocal = new VuexPersistence({
  // 指定用的是存储方式是本地存储
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    houseName: '北京'
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setHouse (state, payload) {
      state.houseName = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vueLocal.plugin]
})
