import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mark from '@/components/Mark'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/mark',
      name: 'Welcome',
      component: Mark
    }
  ]
})
