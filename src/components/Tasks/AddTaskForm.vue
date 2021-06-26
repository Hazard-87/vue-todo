<template>
  <form class="tasks__form" @submit.prevent="addNewTask">
    <div class="tasks__form-block">
      <input
              v-model="newTask"
              class="field"
              :class="[hasError ? 'error' : '']"
              type="text"
              :placeholder="[hasError ? 'Введите текст задачи' : 'Текст задачи']"
      />
      <button :disabled="getIsLoading" class="button" type="submit">
        {{!getIsLoading ? buttonName : buttonLoading}}
      </button>
      <button class="button button--grey" @click="hideTaskForm">
        Отмена
      </button>
    </div>
  </form>
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
        hasError: false
      }
    },

    methods: {
      ...mapActions(['addTask']),
      ...mapMutations(['setCurrentListId']),
      hideTaskForm() {
        this.$emit('hideTaskForm')
        this.hasError = false
      },
      async addNewTask() {
        if (this.newTask) {
          await this.addTask({
            listId: this.id,
            text: this.newTask,
            completed: false
          })
          this.hideTaskForm()
          this.hasError = false
        } else {
          this.hasError = true
        }
      }
    },

    computed: {
      ...mapGetters(['getCurrentListId', 'getIsLoading'])
    },

  }
</script>


<style scoped>
.error {
  &::placeholder {
    color: red;
  }
}
</style>