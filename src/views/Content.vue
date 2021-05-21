<template>
      <div class="todo__tasks">

      <router-view />

    </div>
</template>

<script>
  export default {
    name: "Content",

  }
</script>

<style lang="scss">
  @import '../index.scss';
  @import '../components/Tasks/Tasks.scss';

</style>