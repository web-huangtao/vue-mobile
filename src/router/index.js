import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/views/home/index')), 'home')

Vue.use(Router)

export default new Router({
  scrollBehavior: (to, from, savedPosition) => ({
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(savedPosition.x, savedPosition.y)
      }, 200)
    }
  }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        keepAlive: false
      }
    }
  ]
})
