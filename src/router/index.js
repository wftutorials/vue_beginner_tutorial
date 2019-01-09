import Vue from 'vue'
import Router from 'vue-router'
import BlackBoard from '@/components/BlackBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlackBoard',
      component: BlackBoard
    }
  ]
})
