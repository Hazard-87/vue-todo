<template>
  <div>
    <Task v-for="list in getLists" :list="list" :key="list.id"/>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Task from '@/components/Tasks/Task'

  export default {
    name: "AllTasks",

    methods: {
      ...mapActions(['fetchLists'])
    },

    computed: {
      ...mapGetters(['getLists']),
    },

    mounted() {
      this.fetchLists()
    },

    components: {
      Task
    }
  }
</script>

<style scoped>

</style>