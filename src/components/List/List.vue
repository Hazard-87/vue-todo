<template>

    <router-link :to="url" tag="li" :class="[item && item.className]" @click="$emit('click-list')">
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
    </router-link>

</template>

<script>
  import Badge from '@/components/Badge/Badge'
  import {mapActions} from 'vuex'

  export default {
    name: "List",

    data: () => ({
      activeId: null,
      url: ''
    }),

    props: ['isRemovable', 'item', 'colors', 'isActive'],

    components: {
      Badge
    },
    methods: {
      ...mapActions(['removeList', 'fetchLists']),
      getImgUrl(pic) {
        return require('../../assets/img/' + pic)
      },
      setUrl() {
        if(this.item.id) {
          this.url = '/' + this.item.id
        } else {
          this.url = '/'
        }
      },
      async deleteList(id) {
        await this.removeList(id)
        this.fetchLists()
      }
    },
      mounted() {
        this.setUrl()
      },


  }
</script>

<style scoped>

</style>