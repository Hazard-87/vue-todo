<template>
  <div>
    <Task @changeCompleted="changeCompleted" v-for="(list, i) in getLists" :currentId="i" :list="list" :key="list.id" @click-task="clickTask(i)"/>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from 'vuex'
  import Task from '@/components/Tasks/Task'

  export default {
    name: "AllTasks",

    methods: {
      ...mapActions(['fetchLists', 'changeIsCompleted']),
      ...mapMutations(['setCurrentList']),
      changeCompleted(id, isCompleted) {
        const data = {id, isCompleted}
        this.changeIsCompleted(data)
      },
      clickTask(i) {
        this.setCurrentList(i)
      }
    },

    computed: {
      ...mapGetters(['getLists']),
    },
    //
    // mounted() {
    //   this.fetchLists()
    // },

    components: {
      Task
    }
  }
</script>

<style scoped>

</style>