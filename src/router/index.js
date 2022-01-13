import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import ByDay from '../views/PerDay.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/perday',
    name: 'PerDay',
    component: ByDay,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
