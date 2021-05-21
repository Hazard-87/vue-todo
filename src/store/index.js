import Vue from 'vue'
import Vuex from 'vuex'
import lists from '@/store/lists'
import colors from '@/store/colors'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    lists, colors
  }
})
