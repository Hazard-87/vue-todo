<template>
  <i
          class="badge"
          :class="`badge--${colors[colorId].name}`"
  ></i>
</template>

<script>
  export default {
    name: "Badge",

    props: ['colors', 'colorId'],

  }
</script>

<style lang="scss">
  @import './Badge.scss';
</style>