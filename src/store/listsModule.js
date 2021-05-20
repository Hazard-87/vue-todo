import axios from "axios";

export default {
  state: {
    lists: [],
    colors: [],
    tasks: [],
    currentListId: null
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
    setTasks(state, payload) {
      state.tasks = [payload]
    },
    setNewTasks(state, payload) {
      state.tasks[0].tasks = payload
    },
    setCurrentListId(state, payload) {
      state.currentListId = payload
    },
  },
  getters: {
    getLists(state) {
      return state.lists
    },
    getTasks(state) {
      return state.tasks
    },
    getColors(state) {
      return state.colors
    },
    getCurrentListId(state) {
      return state.currentListId
    },
  },

  actions: {
    async fetchLists(context) {
      let res = await axios.get('http://localhost:3000/lists?_expand=color&_embed=tasks');
      context.commit("setLists", res.data);
    },
    async fetchTasks(context, id) {
      let res = await axios.get(`http://localhost:3000/lists/${id}?_expand=color&_embed=tasks`);
      context.commit("setTasks", res.data);
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
      const res = await axios.delete('http://localhost:3000/lists/' + id);
      if (res.status === 200) {
        const newLists = await context.state.lists.filter(list => list.id !== id);
        await context.commit('setLists', newLists)
      }
    },
    async removeTask(context, id) {
      const res = await axios.delete('http://localhost:3000/tasks/' + id)

        const newTasks = await context.state.tasks[0].tasks.filter(task => task.id !== id);
        console.log(newTasks)
        context.commit('setNewTasks', newTasks)

    },

  }
}
