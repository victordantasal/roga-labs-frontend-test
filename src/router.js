import Vue from 'vue'
import Router from 'vue-router'
import StudentsLayout from '@/layouts/StudentsLayout.vue'
import StudentsListView from '@/views/StudentsList.vue'
import StudentForm from '@/components/StudentForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // root
      path: '/',
      redirect: {
        name: 'Students'
      }
    },
    {
      path:'/students',
      name: 'Students',
      component: StudentsLayout,
      redirect:  {
        name: 'StudentsList'
      },
      children:[
        {
          path:'/students/',
          name: 'StudentsList',
          component: StudentsListView
        }
      ]
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
