import Vue from 'vue'
import Router from 'vue-router'
import StudentsLayout from '@/layouts/StudentsLayout.vue'
import StudentsListView from '@/views/StudentsList.vue'

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
    }
  ]
})
