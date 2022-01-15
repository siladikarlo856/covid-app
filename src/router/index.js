import { createRouter, createWebHistory } from 'vue-router';
import Summary from '../views/Summary.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  // {
  //   path: '/summary',
  //   name: 'Summary',
  //   component: Summary,
  // },
  // {
  //   path: '/',
  //   redirect: '/summary',
  // },
  {
    path: '/',
    name: 'Summary',
    component: Summary,
  },
  {
    path: '/perday/:country',
    name: 'PerDay',
    // lazy loading route
    component: () =>
      import(/* webpackChunkName: 'perday' */ '../views/PerDay.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
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
