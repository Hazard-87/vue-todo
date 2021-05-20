<template>
  <i
          v-if="colors.length"
          class="badge"
          :class="[color.id === currentColor ? `active badge--${color.name}` : `badge--${color.name}`]"
          @click="selectColor"
  ></i>
</template>

<script>
  export default {
    name: "Badge",

    props: ['colors', 'colorId', 'currentColor', 'color'],

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