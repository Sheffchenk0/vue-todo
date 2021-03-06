import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Home from '@/views/Home.vue';
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/todos', component: () => import('./views/Todos.vue') },
  ],
});
