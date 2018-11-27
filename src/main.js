import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
{ path: '/cars', component: AppCars}
];

const router = new VueRouter({
  routes
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
