<template>
  <div class="todo__sidebar">
    <ul class="list">
      <List :item="allTask" @click-list="setList" />
    </ul>

    <div v-if="!getLists.length">
      <div class="loader" v-for="item in 5" :key="item">
        <VueSkeletonLoader
          type="circle"
          :width="15"
          :height="15"
          animation="fade"
        />
        <VueSkeletonLoader
          type="rect"
          :width="150"
          :height="20"
          animation="fade"
        />
      </div>
    </div>

    <ul v-else class="list">
      <List
        v-for="(item, i) in getLists"
        :key="i"
        :item="item"
        :currentId="i"
        @click-list="clickList(i)"
        :colors="getColors"
        isRemovable="isRemovable"
      />
    </ul>

    <AddList />
  </div>
</template>

<script>
import List from "@/components/List/List";
import AddList from "../AddList/AddList";
import { mapGetters, mapMutations } from "vuex";
import VueSkeletonLoader from "skeleton-loader-vue";

export default {
  name: "Sidebar",

  data: () => ({
    itemAddList: [1],
    allTask: {
      name: "Все задачи",
      icon: "list.svg",
    },
    activeItemId: null,
    isRemovable: true,
  }),

  methods: {
    ...mapMutations(["setCurrentList"]),
    clickList(id) {
      this.setCurrentList(id);
    },
    setList() {
      this.setCurrentList(null);
    },
  },

  computed: {
    ...mapGetters(["getLists", "getColors"]),
  },

  components: {
    AddList,
    List,
    VueSkeletonLoader,
  },
};
</script>

<style lang="scss">
@import "../List/List.scss";
.loader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  &:first-child {
    margin-right: 10px;
  }
}
</style>