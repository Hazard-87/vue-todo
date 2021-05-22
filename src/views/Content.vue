<template>
  <div class="todo__tasks">

    <div v-if="!getLists.length">
      <div class="loader-title">
        <VueSkeletonLoader
                type="rect"
                :width="250"
                :height="35"
                animation="fade"
        />
      </div>
      <div class="loader" v-for="item in 5">
        <VueSkeletonLoader
                type="circle"
                :width="25"
                :height="25"
                animation="fade"
        />
        <VueSkeletonLoader
                type="rect"
                :width="350"
                :height="30"
                animation="fade"
        />
      </div>
    </div>

    <router-view v-else/>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import VueSkeletonLoader from 'skeleton-loader-vue'

  export default {
    name: "Content",
    components: {
      VueSkeletonLoader
    },

    computed: {
      ...mapGetters(['getLists'])
    }
  }
</script>

<style lang="scss">
  @import '../index.scss';
  @import '../components/Tasks/Tasks.scss';

  .loader-title{
    margin-bottom: 30px;
  }

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