import Vue from 'vue'
import Vuex from 'vuex'
import listsModule from '@/store/listsModule'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    listsModule
  }
})
