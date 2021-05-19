<template>
  <i
          v-if="colors.length"
          class="badge"
          :class="[colors[colorId] === colors[currentColor] ? `active badge--${colors[colorId].name}` : `badge--${colors[colorId].name}`]"
          @click="selectColor"
  ></i>
</template>

<script>
  export default {
    name: "Badge",

    props: ['colors', 'colorId', 'currentColor'],

    methods: {
      selectColor() {
        this.$emit('selectColor')
      }
    }

  }
</script>

<style lang="scss">
  @import './Badge.scss';
</style>