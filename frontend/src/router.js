import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DetailMovie from './views/DetailMovie.vue'
import NewRabatPoint from './views/NewRabatPoint.vue'

Vue.use(Router)

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path : '/detailmovie',
      name: 'detailmovie',
      component : DetailMovie
    },
    {
      path : '/newrabatpoint',
      name: 'newrabatpoint',
      component : NewRabatPoint
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
