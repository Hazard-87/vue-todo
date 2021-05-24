import axios from 'axios';

export default {
  state: {
    colors: [],
    currentColor: 1,
  },

  mutations: {
    setColors(state, payload) {
      state.colors = payload;
    },
  },

  getters: {
    getColors(state) {
      return state.colors;
    },
  },

  actions: {
    async fetchColors(context) {
      let res = await axios.get('/colors');
      context.commit('setColors', res.data);
    },
  },
};
