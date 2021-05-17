<template>
  <div class="add-list">

    <List
            v-if="!visibleModal"
            :items='items'
            @openModal="openModal"
    />

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
        <i>
          <Badge v-for="(color, i) in $store.getters.getColors"
                 :colors='$store.getters.getColors'
                 :colorId="i"
                 :key="i"
                 :class="{'active' : false}"
          />
        </i>
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

  export default {
    name: "AddList",

    data: () => ({
      colors: ['badge--green', 'badge--red', 'badge--blue'],
      items: [
        {
          className: 'list__add-button',
          icon: 'add.svg',
          name: 'Добавить список'
        }],
      visibleModal: false,
      listValue: ''
    }),

    methods: {
      openModal() {
        this.visibleModal = true
      },

      addTaskList() {
        console.log(this.listValue)
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
</style>