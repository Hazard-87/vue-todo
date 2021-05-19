<template>
  <ul class="list">
    <li v-for="(item, i) in items" :class="[activeId === i ? `active ${item.className}` : item.className]" :key="item.id"
        @click="clickItem(i)">
      <i>
        <img v-if="item.icon" :src="getImgUrl(item.icon)"/>
        <Badge v-else :colorId="item.colorId" :colors="colors"/>
      </i>
      <span>
        {{item.name}}
      </span>
      <img
              @click="deleteList(item.id)"
              v-if="isRemovable"
              class="list__remove-icon"
              src='../../assets/img/remove.svg'/>
    </li>
  </ul>
</template>

<script>
  import Badge from '@/components/Badge/Badge'
  import {mapActions} from 'vuex'

  export default {
    name: "List",

    data: () => ({
      activeId: null
    }),

    props: ['isRemovable', 'items', 'colors', 'isActive'],

    components: {
      Badge
    },
    methods: {
      ...mapActions(['removeList', 'fetchLists']),
      getImgUrl(pic) {
        return require('../../assets/img/' + pic)
      },
      clickItem(i) {
        this.$emit('click')
        this.activeId = i
      },
      async deleteList(id) {
        await this.removeList(id)
        this.fetchLists()
      }
    }
  }
</script>

<style scoped>

</style>