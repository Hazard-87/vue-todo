<template>
  <div class="tasks__form">


    <div class="tasks__form-block">
      <input
              v-model="newTask"
              class="field"
              type="text"
              placeholder="Текст задачи"
      />
      <button class="button" @click="addNewTask">
        Добавить задачу
      </button>
      <button class="button button--grey" @click="hideTaskForm">
        Отмена
      </button>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "AddTaskForm",

    data: () => ({
      newTask: ''
    }),

    methods: {
      ...mapActions(['addTask', 'fetchLists']),
      hideTaskForm() {
        this.$emit('hideTaskForm')
      },
      async addNewTask() {
        await this.addTask({
          listId: 1,
          text: this.newTask,
          completed: false
        })
        this.fetchLists()
        this.hideTaskForm()
      }
    }

  }
</script>


<style scoped>

</style>