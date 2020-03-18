import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/components/Student'
import StudentForm from '@/components/StudentForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // root
      path: '/',
      name: 'Student',
      component: Student
    },
    {
      // create student path
      path: '/form',
      name: 'AddStudentForm',
      component: StudentForm
    },
    {
      //edit student path with INDEX
      path: '/form/:index',
      name: 'EditStudentForm',
      component: StudentForm,
      props: true
    }
  ]
})
