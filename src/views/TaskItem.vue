<template>
  <div>
    <Task v-for="list in getTasks" :list="list" :key="list.id"/>
    <AddTaskButton v-if="!visibleTaskForm" @showTaskForm="showTaskForm"/>
    <AddTaskForm v-else @hideTaskForm="visibleTaskForm = false"/>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Task from '@/components/Tasks/Task'
  import AddTaskButton from '@/components/Tasks/AddTaskButton'
  import AddTaskForm from '@/components/Tasks/AddTaskForm'

  export default {
    name: "TaskItem",

    data() {
      return {
        visibleTaskForm: false,
        id: this.$route.params['id']
      }
    },

    methods: {
      ...mapActions(['fetchTasks']),
      showTaskForm() {
        this.visibleTaskForm = true
      }
    },

    computed: {
      ...mapGetters(['getTasks'])
    },

    mounted() {
      this.fetchTasks(this.id)
    },

    watch: {
      $route(toRoute) {
        this.id = toRoute.params['id']
        this.fetchTasks(this.id)
      }
    },

    components: {
      Task, AddTaskButton, AddTaskForm
    }
  }
</script>

<style scoped>

</style>