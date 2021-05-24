<template>
  <div id="app">
    <div class="todo">
      <Sidebar />
      <Content />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar";
import { mapActions, mapMutations } from "vuex";
import Content from "./views/Content";

export default {
  components: {
    Content,
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
