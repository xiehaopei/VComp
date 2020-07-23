import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/form',
    component: () => import('./views/form.vue'),
  },
  {
    path: '/checkbox',
    component: () => import('./views/checkbox.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
