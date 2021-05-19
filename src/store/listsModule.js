import axios from "axios";

export default {
  state: {
    lists: [],
    colors: [],
  },
  mutations: {
    setLists(state, payload) {
      state.lists = payload
    },
    addLists(state, payload) {
      state.lists.push(payload)
    },
    setColors(state, payload) {
      state.colors = payload
    },
  },
  getters: {
    getLists(state) {
      return state.lists
    },
    getColors(state) {
      return state.colors
    },
  },

  actions: {
    async fetchLists(context) {
      let res = await axios.get('http://localhost:3000/lists?_expand=color&_embed=tasks');
      context.commit("setLists", res.data);
    },
    async fetchColors(context) {
      let res = await axios.get('http://localhost:3000/colors');
      context.commit("setColors", res.data);
    },
    async addList(context, payload) {
      let res = await axios.post('http://localhost:3000/lists', payload);
      context.commit("addLists", res.data);
    },
    async addTask(context, payload) {
      await axios.post('http://localhost:3000/tasks', payload);
    },
    async removeList(context, id) {
      await axios.delete(`http://localhost:3000/lists/${id}`);
    },
    async removeTask(context, id) {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
    }
  }
}
