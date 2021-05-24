import axios from "axios";

export default {
  state: {
    lists: [],
    currentListId: null,
    currentList: null,
    isLoading: false
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
    setNewTasks(state, newTasks) {
      state.lists[state.currentList].tasks = newTasks
    },
    editIsCompleted(state, payload) {
      state.lists[state.currentList].tasks.map(task => {
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

    setCurrentListId(state, payload) {
      state.currentListId = payload
    },
    setCurrentList(state, payload) {
      state.currentList = payload
    },
    setIsLoading(state, payload) {
      state.isLoading = payload
    }

  },

  getters: {
    getLists(state) {
      return state.lists
    },
    getCurrentListId(state) {
      return state.currentListId
    },
    getCurrentList(state) {
      return state.currentList
    },
    getIsLoading(state) {
      return state.isLoading
    },
  },

  actions: {
    async fetchLists({commit}) {
      commit('setIsLoading', true)
      try {
        // let res = await axios.get('http://localhost:3000/lists?_expand=color&_embed=tasks');
        let res = await axios.get('/lists?_expand=color&_embed=tasks');
        commit("setLists", res.data);
      } catch (e) {
        alert("Произошла ошибка при получении списков задач")
      } finally {
        commit('setIsLoading', false)
      }
    },

    async addList({commit}, payload) {
      commit('setIsLoading', true)
      try {
        let res = await axios.post('/lists', payload);
        res.data = {...res.data, tasks: []}
        commit("addLists", res.data);
      } catch (e) {
        alert('Не получилось добавить список задач')
      } finally {
        commit('setIsLoading', false)
      }
    },
    async addTask({commit}, payload) {
      commit('setIsLoading', true)
      try {
        const res = await axios.post('/tasks', payload);
        commit("addTasks", res.data);
      } catch (e) {
        alert('Произошла ошибка при добавлении задачи')
      } finally {
        commit('setIsLoading', false)
      }
    },
    async removeList(context, id) {
      try {
        const res = await axios.delete('/lists/' + id);
        const newLists = await context.state.lists.filter(list => list.id !== id);
        await context.commit('setLists', newLists)
      } catch (e) {
        alert('Произошла ошибка при удалении списка задач')
      }
    },
    async removeTask(context, id) {
      try {
        const res = await axios.delete('/tasks/' + id)
        const newTasks = await context.state.lists[context.state.currentList].tasks.filter(task => task.id !== id);
        context.commit('setNewTasks', newTasks)
      } catch (e) {
        alert('Произошла ошибка при удалении задачи')
      }
    },
    async changeIsCompleted(context, payload) {
      try {
        const res = await axios.patch('/tasks/' + payload.id, {
          completed: !payload.isCompleted
        })
        context.commit('editIsCompleted', res.data)
      } catch (e) {
        alert('Произошла ошибка при изменении готовности задачи')
      }
    },
    async changeTitle(context, payload) {
      try {
        const res = await axios.patch('/lists/' + payload.id, {
          name: payload.name
        })
        context.commit('editTitle', res.data)
      } catch (e) {
        alert('Произошла ошибка при изменении заголовка списка задач')
      }
    },
    async changeTaskText(context, payload) {
      try {
        const res = await axios.patch('/tasks/' + payload.id, {
          text: payload.text
        })
        context.commit('editText', res.data)
      } catch (e) {
        alert('Произошла ошибка при обновлении текста задачи')
      }
    },
  }
}
