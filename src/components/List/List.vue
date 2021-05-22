<template>
  <li @click="clickList">
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
      url: '',
      isActive: false,
      listId: null
    }),

    props: ['isRemovable', 'item', 'colors'],

    components: {
      Badge
    },

    methods: {
      ...mapActions(['removeList']),
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
      clickList() {
        this.$emit('click-list')
        this.isActive = !this.isActive
        // this.listId = index
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