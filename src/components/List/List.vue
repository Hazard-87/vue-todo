<template>
  <li :class="[getCurrentList == currentId ? 'active' : '']">
  <div @click="clickList(item.id)" class="list-inner" >
    <router-link tag="div" class="list-link" :class="[item && item.className]" :to="url">
      <i>
        <img v-if="item.icon" :src="getImgUrl(item.icon)"/>
        <Badge v-else :color="colors[item.colorId-1]" :colors="colors"/>
      </i>
      <span>
        {{item.name}}
      </span>
    </router-link>

  </div>
    <img
            @click="deleteList(item.id)"
            v-if="isRemovable"
            class="list__remove-icon"
            src='../../assets/img/remove.svg'/>
  </li>
</template>

<script>
  import Badge from '@/components/Badge/Badge'
  import {mapActions, mapGetters, mapMutations} from 'vuex'

  export default {
    name: "List",

    data: () => ({
      activeId: null,
      url: ''
    }),

    props: ['isRemovable', 'item', 'colors', 'currentId'],

    components: {
      Badge
    },

    methods: {
      ...mapActions(['removeList']),
      ...mapMutations(['setCurrentListId']),
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
      clickList(id) {
        this.$emit('click-list')
        this.setCurrentListId(id)
      },

      deleteList(id) {
        this.removeList(id)
        console.log(this.$route.params)
        console.log(this.getCurrentListId)
        if (+this.$route.params.id === id) {
        this.$router.push('/tasks')
        }
      }
    },

    computed: {
      ...mapGetters(['getCurrentList', 'getCurrentListId'])
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
.list-inner{
  width: 100%;
}
  .list-link{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 12px;
  }
</style>