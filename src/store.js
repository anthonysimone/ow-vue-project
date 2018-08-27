import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: [],
    userAccount: {}
  },
  plugins: [createPersistedState()],
  mutations: {
    // Add a new account
    addAccount (state, account) {
      state.accounts.push(account);
    },

    // Update an existing account
    updateAccount (state, newData) {
      if (this.getters.getAccountById(newData.name)) {
        newData.lastUpdated = new Date();
        Object.assign(this.getters.getAccountById(newData.name), newData);
      }
    },

    // Clear all application state
    clearState (state) {
      state.accounts.splice(0, state.accounts.length);
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
