<template>
  <div class="tasks__form">


    <div class="tasks__form-block">
      <input
              v-model="newTask"
              class="field"
              type="text"
              placeholder="Текст задачи"
      />
      <button :disabled="getIsLoading" class="button" @click="addNewTask">
        {{!getIsLoading ? buttonName : buttonLoading}}
      </button>
      <button class="button button--grey" @click="hideTaskForm">
        Отмена
      </button>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations, mapGetters} from 'vuex'

  export default {
    name: "AddTaskForm",

    data() {
      return {
        newTask: '',
        id: +this.$route.params['id'],
        buttonName: 'Добавить задачу',
        buttonLoading: 'Добавление...',
      }
    },

    methods: {
      ...mapActions(['addTask']),
      ...mapMutations(['setCurrentListId']),
      hideTaskForm() {
        this.$emit('hideTaskForm')
      },
      async addNewTask() {
        await this.addTask({
          listId: this.id,
          text: this.newTask,
          completed: false
        })
        this.hideTaskForm()
      }
    },

    computed: {
      ...mapGetters(['getCurrentListId', 'getIsLoading'])
    },

  }
</script>


<style scoped>

</style>