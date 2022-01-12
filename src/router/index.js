import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import ByDay from '../views/ByDay.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/byday',
    name: 'ByDay',
    component: ByDay,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
