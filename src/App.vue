<template>
  <div id="app">
    <div class="todo">
      <Sidebar />
      <TaskList />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar";
import { mapActions, mapMutations } from "vuex";

import TaskList from "./views/Content";

export default {
  components: {
    TaskList,
    Sidebar,
  },

  mounted() {
    if (this.$router.currentRoute.fullPath !== "/") {
      this.$router.push("/");
    }
    this.fetchLists();
    this.fetchColors();
  },

  methods: {
    ...mapActions(["fetchLists", "fetchColors"]),
    ...mapMutations(["setCurrentList"]),
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
