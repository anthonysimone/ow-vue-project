import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    userAccount: {}
  },
  mutations: {
    addAccount (state, account) {
      state.accounts.push(account);
    }
  },
  actions: {

  },
  getters: {
    getAccountById: (state) => (id) => {
      return state.accounts.find(account => account.name === id);
    }
  }
})
