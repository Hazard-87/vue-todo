<template>
  <div class="todo__sidebar">

    <List :items="allTask"/>

    <List :isActive="isActive" :items="getLists" :colors="getColors" isRemovable="isRemovable"/>

    <AddList/>

  </div>


</template>

<script>
  import List from '@/components/List/List'
  import AddList from "../AddList/AddList";
  import {mapGetters} from 'vuex'

  export default {
    name: "Sidebar",

    data: () => ({
      allTask: [
        {
          name: 'Все задачи',
          icon: 'list.svg'
        }
      ],
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