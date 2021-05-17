<template>
  <div class="tasks__form">


    <div class="tasks__form-block">
      <input
              v-model="newTask"
              class="field"
              type="text"
              placeholder="Текст задачи"
      />
      <button class="button" @click="addTask">
        Добавить задачу
      </button>
      <button class="button button--grey" @click="hideTaskForm">
        Отмена
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddTaskForm",

    data: () => ({
      newTask: ''
    }),

    methods: {
      hideTaskForm() {
        this.$emit('hideTaskForm')
      },
      addTask() {
        console.log(this.newTask)
        this.hideTaskForm()
      }
    }

  }
</script>



<style scoped>

</style>