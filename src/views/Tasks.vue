<template>
  <div>
    <Task @changeCompleted="changeCompleted" :list="getLists[getCurrentList]"/>
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
      ...mapActions(['changeIsCompleted']),
      showTaskForm() {
        this.visibleTaskForm = true
      },
      changeCompleted(id, isCompleted) {
        const payload = {id, isCompleted}
        this.changeIsCompleted(payload)
      }
    },

    computed: {
      ...mapGetters(['getTasks', 'getLists', 'getCurrentList']),

    },

    watch: {
      $route(toRoute) {
        this.id = toRoute.params['id']
      }
    },

    components: {
      Task, AddTaskButton, AddTaskForm
    }
  }
</script>

<style scoped>

</style>