import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''|| localStorage.getItem('token')
  },
  mutations: {
    setToken(state, token) {
      localStorage.setItem('token', token);
      state.token = token;
    },
    removeToken(state) {
      localStorage.removeItem('token');
      state.token = null
    }
  },
  actions: {
  },
  modules: {
  }
})
