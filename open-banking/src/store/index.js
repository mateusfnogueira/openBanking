import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    user: [],
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.auth = payload;
    },
    setUser(state, user) {
      state.user = user;
      // state.user = user;
      // if (user) {
      //   axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
      // } else {
      //   delete axios.defaults.headers.common['Authorization']
      // }
    }
  },
  actions: {
    getUser(context, payload) {
      api.get(`/users/${payload}`)
        .then(response => {
          context.commit("setUser", response.data);
          context.commit("UPDATE_LOGIN", true);
        });
    }
  },
  modules: {
  }
})
