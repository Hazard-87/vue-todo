<template>
  <div class="tasks">
    <h2 class="tasks__title" v-if="list" :style="[list && list.color && {color: list.color.hex}]">
      {{list.name}}
      <img src="../../assets/img/edit.svg" alt="">
    </h2>
    <input type="text" v-model="newTitle" @keyup.enter="onEditTitle(list.id)">

    <div class="tasks__items">

      <TaskItem :list="list" @changeCompleted="changeCompleted" :currentId="currentId" @click-task="$emit('click-task')"/>

      <!--        <div class="tasks__items-row">Задач нет</div>-->

    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex'
  import TaskItem from "./TaskItem";

  export default {
    name: "Task",
    components: {TaskItem},

    data() {
      if (this.list) {
        return {
          newTitle: this.list.name
        }
      }
      return {newTitle: ''}
    },

    props: ['list', 'currentId'],

    methods: {
      ...mapActions(['removeTask', 'changeTitle']),
      ...mapMutations(['setCurrentList']),
      changeCompleted(id, isCompleted) {
        this.$emit('changeCompleted', id, isCompleted)
        if (this.currentId) {
          this.setCurrentList(this.currentId)
        }
      },
      onEditTitle(id) {
        const data = {
          name: this.newTitle,
          id
        }
        this.changeTitle(data)
      }
    }
  }
</script>

<style lang="scss">

</style>