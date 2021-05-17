<template>
  <div class="tasks__form-new" @click="showTaskForm">
    <img src='../../assets/img/add.svg' alt="Add icon" />
    <span>Новая задача</span>
  </div>
</template>

<script>
  export default {
    name: "AddTaskButton",

    methods: {
      showTaskForm() {
        this.$emit('showTaskForm')
      }
    }
  }
</script>

<style scoped>

</style>