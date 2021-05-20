<template>
  <li @click="$emit('click-list')">
    <router-link tag="div" class="list-link" :class="[item && item.className]" :to="url">
      <i>
        <img v-if="item.icon" :src="getImgUrl(item.icon)"/>
        <Badge v-else :color="colors[item.colorId-1]" :colors="colors"/>
      </i>
      <span>
        {{item.name}}
      </span>
    </router-link>
    <img
            @click="deleteList(item.id)"
            v-if="isRemovable"
            class="list__remove-icon"
            src='../../assets/img/remove.svg'/>
  </li>

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
        if (this.item.id) {
          this.url = '/' + this.item.id
        } else {
          this.url = '/'
        }
      },
      async deleteList(id) {
        await this.removeList(id)
        this.$router.push('/')
      }
    },
    mounted() {
      this.setUrl()
      // this.$router.push('/')
    },


  }
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  padding: 0;
}
  .list-link{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 12px;
  }
</style>