import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './Index.vue';
import graficoPorCanal from './graficoPorCanal.vue';
import graficoNoticias from './graficoNoticias.vue';
import VueResource from 'vue-resource';
import graficoTeleseries from './graficoTeleseries.vue';
import graficoMatinales from './graficoMatinales.vue';
import agregarNuevoPrograma from './agregarNuevoPrograma.vue'
require("./style.scss");

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/index', alias: '/', component: Index},
  { path:'/graficoPorCanal', component: graficoPorCanal}, 
  { path: '/graficoNoticias', component: graficoNoticias},
  { path: '/graficoTeleseries', component: graficoTeleseries},
  { path: '/graficoMatinales', component: graficoMatinales},
  { path: '/agregarNuevoPrograma', component: agregarNuevoPrograma}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
