<template>
  <div id="app">
    <div class="todo">
      <NavList/>
      <TaskList/>
    </div>
  </div>
</template>

<script>
  import NavList from "@/components/NavList/NavList";
  import {mapActions} from "vuex";
  import TaskList from "./views/TaskList";

  export default {
    components: {
      TaskList,
      NavList
    },
    mounted() {
      this.fetchLists()
      this.fetchColors()
    },
    methods: {
      ...mapActions(['fetchLists', 'fetchColors']),
    }
  }
</script>

<style lang="scss">
  @import './index.scss';

</style>
