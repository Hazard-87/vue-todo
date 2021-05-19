<template>
  <div class="todo__sidebar">
    <ul class="list">
      <List v-for="item in allTask" :item="item"/>
    </ul>

    <ul class="list">
      <List v-for="item in getLists"
            :isActive="isActive"
            :item="item"
            :colors="getColors"
            @click=""
            isRemovable="isRemovable"/>
    </ul>

      <AddList/>

  </div>


</template>

<script>
  import List from '@/components/List/List'
  import AddList from "../AddList/AddList";
  import {mapGetters} from 'vuex'

  export default {
    name: "NavList",

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