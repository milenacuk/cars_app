import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars.vue'
import AddCar from './components/AddCar.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path:'/', redirect: '/cars'},
  { path: '/cars', component: AppCars, name: 'cars'},
  { path: '/add', component: AddCar, name: 'add-car'}
];

const router = new VueRouter({
  mode: "history",
  routes
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
