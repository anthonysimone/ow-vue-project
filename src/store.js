import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // accounts: Vue.ls.get('accounts', []),
    accounts: [],
    userAccount: {}
  },
  plugins: [createPersistedState()],
  mutations: {
    addAccount (state, account) {
      state.accounts.push(account);
      // Vue.ls.set('accounts', state.accounts);
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
