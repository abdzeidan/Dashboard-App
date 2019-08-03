import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  strict: true,
  state: {
    users: {
      Name: '',
      Email: '',
      Password: ''
    }
  },
  getters: {
    getUserName: state => {
      return state.users.Name;
    },
    getUserEmail: state => {
      return state.users.Email;
    },
  },

  mutations: {
    UPDATE_USERS(state, data) {
      state.users = data
    },

    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
  },

  actions: {
    updateUsers({
      commit
    }, {
      Name,
      Email,
      Password,
    }) {
      commit("UPDATE_USERS", {
        Name,
        Email,
        Password,
      });
    },
  },
});