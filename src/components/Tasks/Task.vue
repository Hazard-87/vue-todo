<template>
  <div class="tasks">
    <template v-if="list">
      <input v-if="editMode && editId === list.id" type="text" v-model="newTitle" @keyup.enter="onEditTitle(list.id)">
      <h1 v-else class="tasks__title" :style="[list && list.color && {color: list.color.hex}]">
        {{list.name}}
        <img src="../../assets/img/edit.svg" alt="" @click="onChangeTitle(list.id, list.name)">
      </h1>

      <div class="tasks__items">
        <h2 v-if="!list.tasks.length" class="tasks__items-row">Задачи отсутствуют</h2>
        <TaskItem v-else :list="list" @changeCompleted="changeCompleted" :currentId="currentId"
                  @click-task="$emit('click-task')"/>
      </div>
    </template>
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
          newTitle: this.list.name,
          editMode: false,
          editId: null
        }
      }
      return {
        newTitle: '',
        editMode: false,
        editId: null
      }
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
      onChangeTitle(index, name) {
        this.editMode = !this.editMode
        this.editId = index
        this.newTitle = name
      },
      onEditTitle(id) {
        const data = {
          name: this.newTitle,
          id
        }
        this.changeTitle(data)
        this.editMode = false
      }
    }
  }
</script>

<style lang="scss">
  input {
    margin: 0 auto 0 15px;
    width: 70%;
    padding: 10px 5px;
    border: none;
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    font-size: 20px;
  }
</style>