import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    user: {
      id: "",
      ag: "",
      accountN: "",
      name: "",
      lastname: "",
      birthday: "",
      email: "",
      login: "",
      password: "",
      balance: ""
    },
  },
  mutations: {
    signIn(state, payload) {
      state.auth = payload;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    getUser(context, payload) {
      api.get(`/users/${payload}`)
        .then(response => {
          context.commit("setUser", response.data);
          context.commit("signIn", true);
        });
    }
  },
  modules: {
  }
})
