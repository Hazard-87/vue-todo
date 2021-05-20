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

    <div v-else class="add-list__popup">
      <img
              src='../../assets/img/close.svg'
              alt="Close button"
              class="add-list__popup-close-btn"
              @click="visibleModal = false"
      />

      <input
              v-model="listValue"
              class="field"
              type="text"
              placeholder="Название списка"
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
      <button class="button" @click="addTaskList">
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
  import List from "../List/List";
  import Badge from "../Badge/Badge";
  import {mapActions} from 'vuex';

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
      listValue: '',
      currentColor: 1,
      isActive: false,
    }),

    methods: {
      ...mapActions(['addList', 'fetchLists']),
      openModal() {
        this.visibleModal = true
      },
      selectColor(id) {
        this.currentColor = id
      },

      async addTaskList() {
        await this.addList({
          name: this.listValue,
          colorId: this.currentColor
        })
        this.listValue = ''
        this.visibleModal = false
      },
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
</style>