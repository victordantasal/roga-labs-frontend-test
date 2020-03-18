import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import students from './modules/students'
import dateformat from 'dateformat'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'rogalabs-test-victorDantas',
  storage: localStorage
})

const store = new Vuex.Store({
  modules: {
    students
  },
  state: {
    teacher: {
      name: 'John Doe',
      lastLogin: dateformat(new Date(), "dd/mm/yyyy")
    }
  },
  getters: {

  },
  plugins: [vuexPersist.plugin]
})

export default store
