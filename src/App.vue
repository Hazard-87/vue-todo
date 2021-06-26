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
import { mapActions } from "vuex";
import TaskList from "./views/Content";

export default {
  components: {
    TaskList,
    Sidebar,
  },

  mounted() {
    if (this.$router.currentRoute.fullPath !== "/tasks") {
      this.$router.push("/tasks");
    }
    this.fetchLists();
    this.fetchColors();
  },

  methods: {
    ...mapActions(["fetchLists", "fetchColors"])
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
