<template>
  <div class="todo__sidebar">
    <ul class="list">
      <List v-for="item in allTask" :item="item"/>
    </ul>

    <ul class="list">
      <List v-for="(item, i) in getLists"
            :isActive="isActive"
            :item="item"
            @click-list="clickList(i)"
            :colors="getColors"
            isRemovable="isRemovable"/>
    </ul>

      <AddList/>

  </div>


</template>

<script>
  import List from '@/components/List/List'
  import AddList from "../AddList/AddList";
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "Sidebar",

    data: () => ({
      itemAddList: [1],
      allTask: [
        {
          name: 'Все задачи',
          icon: 'list.svg'
        }
      ],
      activeItemId: null,
      isRemovable: true,
      isActive: false
    }),

    methods: {
      ...mapMutations(['setCurrentList']),
      clickList(id) {
        this.setCurrentList(id)
      }
    },

    computed: {
      ...mapGetters(['getLists', 'getColors'])
    },

    components: {
      AddList,
      List
    }
  }
</script>

<style lang="scss">
  @import '../List/List.scss';


</style>