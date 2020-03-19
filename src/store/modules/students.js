import dateformat from 'dateformat'
// initial state
// shape: {id, lastExam, name, email, age, phoneNumber}
const state = {
  all: []      // all students
}

// getters
 const getters = {
   hasStudents (state) {
     return (state.all || '').length > 0
   }
 }

 // actions
 const actions = {
   addStudent({commit}, {name, email, age, phoneNumber}) {
     commit('pushStudent', {
       lastExam: dateformat(new Date(), "dd/mm/yyyy"),
       name,
       email,
       age,
       phoneNumber,
       active: true
     })
   },
   editStudent({commit}, payload) {
     commit('sliceStudent', {
       ...payload
     })
   },
   deleteStudent({commit}, {index}) {
     commit('deleteStudent', {index})
   },
   setActive({commit}, {index, active}) {
     commit('setStudentActive', {index, active})
   }

 }

 // mutations
 const mutations = {
   pushStudent (state, {lastExam, name, email, age, phoneNumber, active }) {
     state.all.push({
       lastExam,
       name,
       email,
       age,
       phoneNumber,
       active
     })
   },
   sliceStudent (state, {name, email, age, phoneNumber, active, lastExam, index}) {
     state.all.splice(index, 1, {
       lastExam,
       name,
       email,
       age,
       phoneNumber,
       active
     })
   },
   deleteStudent (state, {index}) {
     state.all.splice(index, 1)
   },
   setStudentActive (state, {index, active}) {
     state.all[index].active = active
   }
 }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
