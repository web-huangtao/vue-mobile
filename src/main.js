// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入reset.scss
import '@/assets/scss/reset.scss'

// 移动端适配
import 'lib-flexible'

// 引入fastclick库
import fastClick from 'fastclick'

// 引入vconsole
import VConsole from 'vconsole/dist/vconsole.min.js'

// 引入全局自定义组件
import myComponents from '@/components/index.js'
Vue.use(myComponents)

// 解决移动端点击事件300ms延迟问题
fastClick.attach(document.body)

// 使用mint-ui
Vue.use(MintUI)

// 使用vconsole
let vConsole = new VConsole() // 初始化
console.log(vConsole)

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// 路由钩子，拦截处理
router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
