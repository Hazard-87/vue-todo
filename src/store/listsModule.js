import axios from "axios";

export default {
  state: {
    lists: [],
    colors: [],
    tasks: []
  },
  mutations: {
    setLists(state, payload) {
      state.lists = payload
    },
    setColors(state, payload) {
      state.colors = payload
    },
    setTasks(state, payload) {
      state.tasks = payload
    },
  },
  getters: {
    getLists(state) {
      return state.lists
    },
    getColors(state) {
      return state.colors
    },
    getTasks(state) {
      return state.tasks
    }
  },

  actions: {
    async fetchLists(context) {
      let res = await axios.get('http://localhost:3000/lists');
      context.commit("setLists", res.data);
    },
    async fetchColors(context) {
      let res = await axios.get('http://localhost:3000/colors');
      context.commit("setColors", res.data);
    },
    async fetchTasks(context) {
      let res = await axios.get('http://localhost:3000/tasks');
      context.commit("setTasks", res.data);
    },
  }
}
