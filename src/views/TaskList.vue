<template>
      <div class="todo__tasks">

      <router-view />

    </div>
</template>

<script>
  import Task from "@/components/Tasks/Task";
  import AddTaskForm from "@/components/Tasks/AddTaskForm";
  import AddTaskButton from "../components/Tasks/AddTaskButton";

  export default {
    name: "TaskList",

  }
</script>

<style lang="scss">
  @import '../index.scss';
  @import '../components/Tasks/Tasks.scss';

</style>