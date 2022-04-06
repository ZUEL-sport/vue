import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
// import VueRouter from 'vue-router'
import router from './router'
//import axios from 'axios';
//Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,//注入路由器
  render: h => h(App),
}).$mount('#app')
