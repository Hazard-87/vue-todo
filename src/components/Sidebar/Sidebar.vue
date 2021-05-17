<template>
  <div class="todo__sidebar">

    <List :items="allTask"/>

    <List :items="this.$store.getters.getLists" :colors="this.$store.getters.getColors" isRemovable="isRemovable"/>

    <AddList/>

  </div>


</template>

<script>
  import List from '@/components/List/List'
  import AddList from "../AddList/AddList";

  export default {
    name: "Sidebar",

    data: () => ({
      allTask: [
        {
          name: 'Все задачи',
          icon: 'list.svg'
        }
      ],
      lists: [],
      colors: [],
      isRemovable: true,
    }),

    components: {
      AddList,
      List
    }
  }
</script>

<style lang="scss">
  @import '../List/List.scss';


</style>