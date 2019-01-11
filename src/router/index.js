import Vue from 'vue'
import Router from 'vue-router'
import BlackBoard from '@/components/BlackBoard'
import ContactView from '@/components/ContactView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlackBoard',
      component: BlackBoard
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: ContactView
    }
  ]
})
