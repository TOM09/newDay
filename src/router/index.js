import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Hi1 from '@/components/Hi1'
import error from '@/components/error'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Hello',
      component:HelloWorld
    },{
      path: '/params/:newsId/:newsTitle',
      component:Params
    },{
      path: '/gohome',
      redirect:'/'
    },{
      path: '/Hi1',
      component:Hi1
    },{
      path: '/Hi1',
      component:Hi1,
      alias:'/goHi221'
    },{
      path: '*',
      component:error
    }
  ]
})
