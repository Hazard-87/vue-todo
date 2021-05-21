import axios from "axios";

export default {
  state: {
    lists: [],
    colors: [],
    tasks: [],
    currentListId: null,
    currentColor: 1,
    currentList: 2,
  },
  mutations: {
    setLists(state, payload) {
      state.lists = payload
    },
    addLists(state, payload) {
      state.lists.push(payload)
    },
    addTasks(state, payload) {
      state.lists[state.currentList].tasks.push(payload)
    },
    setColors(state, payload) {
      state.colors = payload
    },
    setTasks(state, payload) {
      state.tasks = [payload]
    },
    setNewTasks(state, newTasks) {
      state.lists[state.currentList].tasks = newTasks
    },
    setCurrentListId(state, payload) {
      state.currentListId = payload
    },
    setCurrentList(state, payload) {
      state.currentList = payload
    },
    editIsCompleted(state, payload) {
      state.lists[state.currentList ].tasks.map(task => {
        if (task.id === payload.id) {
          task.completed = payload.completed
        }
      })
    },
    editTitle(state, payload) {
      state.lists.map(list => {
        if (list.id === payload.id) {
          list.name = payload.name
        }
      })
    },
    editText(state, payload) {
      state.lists[state.currentList].tasks.map(task => {
        if (task.id === payload.id) {
          task.text = payload.text
        }
      })
    },
  }
  ,
  getters: {
    getLists(state) {
      return state.lists
    }
    ,
    getTasks(state) {
      return state.tasks
    }
    ,
    getColors(state) {
      return state.colors
    }
    ,
    getCurrentListId(state) {
      return state.currentListId
    }
    ,
    getCurrentList(state) {
      return state.currentList
    },
  },

  actions: {
    async fetchLists(context) {
      let res = await axios.get('http://localhost:3000/lists?_expand=color&_embed=tasks');
      context.commit("setLists", res.data);
    }
    ,
    async fetchTasks(context, id) {
      let res = await axios.get(`http://localhost:3000/lists/${id}?_expand=color&_embed=tasks`);
      context.commit("setTasks", res.data);
    }
    ,
    async fetchColors(context) {
      let res = await axios.get('http://localhost:3000/colors');
      context.commit("setColors", res.data);
    }
    ,
    async addList(context, payload) {
      let res = await axios.post('http://localhost:3000/lists', payload);
      res.data = {...res.data, tasks: []}
      context.commit("addLists", res.data);
    }
    ,
    async addTask(context, payload) {
      const res = await axios.post('http://localhost:3000/tasks', payload);
      context.commit("addTasks", res.data);
    }
    ,
    async removeList(context, id) {
      const res = await axios.delete('http://localhost:3000/lists/' + id);
      if (res.status === 200) {
        const newLists = await context.state.lists.filter(list => list.id !== id);
        await context.commit('setLists', newLists)
      }
    },
    async removeTask(context, {id, index}) {
      const res = await axios.delete('http://localhost:3000/tasks/' + id)
      const newTasks = await context.state.lists[context.state.currentList].tasks.filter(task => task.id !== id);
      context.commit('setNewTasks', newTasks)
    },
    async changeIsCompleted(context, payload) {
      const res = await axios.patch('http://localhost:3000/tasks/' + payload.id, {
        completed: !payload.isCompleted
      })
      context.commit('editIsCompleted', res.data)
    }
    ,
    async changeTitle(context, payload) {
      const res = await axios.patch('http://localhost:3000/lists/' + payload.id, {
        name: payload.name
      })
      context.commit('editTitle', res.data)
    }
    ,
    async changeTaskText(context, payload) {
      const res = await axios.patch('http://localhost:3000/tasks/' + payload.id, {
        text: payload.text
      })
      context.commit('editText', res.data)
    }
    ,

  }
}
