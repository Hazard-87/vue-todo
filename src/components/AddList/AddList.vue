<template>
  <div class="add-list">
    <ul class="list" v-if="!visibleModal">
      <li :class="[item.className]" @click="openModal">
        <i>
          <img src="../../assets/img/add.svg"/>
        </i>
        <span>
        {{item.name}}
      </span>
      </li>
    </ul>

    <form v-else class="add-list__popup" @submit.prevent="addTaskList">
      <img
              src='../../assets/img/close.svg'
              alt="Close button"
              class="add-list__popup-close-btn"
              @click="hideModal"
      />

      <input
              v-model="listTitle"
              :class="[hasError ? 'error' : '']"
              class="field"
              type="text"
              :placeholder="[hasError ? 'Введите текст' : 'Название списка']"
      />

      <div class="add-list__popup-colors">
        <Badge v-for="(color, i) in $store.getters.getColors"
               :colors='$store.getters.getColors'
               :colorId="color.id"
               :color="color"
               :currentColor="currentColor"
               :key="i"
               :class="{'active' : false}"
               @selectColor="selectColor(color.id)"
        />
      </div>
      <button :disabled="getIsLoading" type="submit" class="button">
        {{!getIsLoading ? buttonName : buttonLoading}}
      </button>
    </form>
  </div>
</template>

<script>
  import List from "../List/List";
  import Badge from "../Badge/Badge";
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: "AddList",

    data: () => ({
      item:
          {
            className: 'list__add-button',
            icon: 'add.svg',
            name: 'Добавить список'
          },
      visibleModal: false,
      listTitle: '',
      currentColor: 1,
      isActive: false,
      buttonName: 'Добавить',
      buttonLoading: 'Добавление...',
      hasError: false
    }),

    methods: {
      ...mapActions(['addList']),
      openModal() {
        this.visibleModal = true
      },
      hideModal() {
        this.visibleModal = false
        this.hasError = false
      },
      selectColor(id) {
        this.currentColor = id
      },

      async addTaskList() {
        if (this.listTitle) {
          await this.addList({
            name: this.listTitle,
            colorId: this.currentColor
          })
          this.listTitle = ''
          this.visibleModal = false
          this.hasError = false
        } else {
          this.hasError = true
        }
      },
    },

    computed: {
      ...mapGetters(['getIsLoading'])
    },

    components: {
      List, Badge
    }
  }
</script>

<style lang="scss">
  @import '../AddList/AddList.scss';

  li {
    padding: 10px 12px;
  }

  .error {
    &::placeholder {
      color: red;
    }
  }
</style>