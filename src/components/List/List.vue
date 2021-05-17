<template>
  <ul class="list">
    <li v-for="(item, i) in items" :class="item.className" :key="i" @click="openModal">
      <i>
      <img v-if="item.icon" :src="getImgUrl(item.icon)"/>
      <Badge v-else :colorId="item.colorId" :colors="colors"/>
      </i>
      <span>
        {{item.name}}
      </span>
      <img v-if="isRemovable"
           class="list__remove-icon"
           src='../../assets/img/remove.svg'/>
    </li>
  </ul>
</template>

<script>
  import Badge from '@/components/Badge/Badge'

  export default {
    name: "List",

    props: ['isRemovable', 'items', 'colors'],

    components: {
      Badge
    },
    methods: {
      getImgUrl(pic) {
        return require('../../assets/img/' + pic)
      },
      openModal() {
        this.$emit('openModal')
      }
    }
  }
</script>

<style scoped>

</style>