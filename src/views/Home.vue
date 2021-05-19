<template>
  <div class="todo">

    <Sidebar/>

    <div class="todo__tasks">

      <Task/>
      <AddTaskButton v-if="!visibleTaskForm" @showTaskForm="showTaskForm"/>
      <AddTaskForm v-else @hideTaskForm="visibleTaskForm = false" />

    </div>
  </div>
</template>

<script>
  import Sidebar from "@/components/Sidebar/Sidebar";
  import Task from "@/components/Tasks/Task";
  import AddTaskForm from "@/components/Tasks/AddTaskForm";
  import AddTaskButton from "../components/Tasks/AddTaskButton";
  import {mapActions} from 'vuex'

  export default {
    name: "Home",

    data: () => ({
      visibleTaskForm: false,
    }),

    mounted() {
      this.fetchLists()
      this.fetchColors()
    },

    methods: {
      ...mapActions(['fetchLists', 'fetchColors']),
      showTaskForm() {
        this.visibleTaskForm = true
      }
    },

    components: {AddTaskButton, AddTaskForm, Task, Sidebar}
  }
</script>

<style lang="scss">
  @import '../index.scss';
  @import '../components/Tasks/Tasks.scss';

</style>