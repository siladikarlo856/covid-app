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
    redirect: {
      name: 'Summary',
    },
  },
  {
    path: `/${process.env.VUE_APP_REPO_NAME}/summary`,
    name: 'Summary',
    component: Summary,
  },
  {
    path: `/${process.env.VUE_APP_REPO_NAME}/perday/:country`,
    name: 'PerDay',
    // lazy loading route
    component: () =>
      import(/* webpackChunkName: 'perday' */ '../views/PerDay.vue'),
    props: true,
  },
  {
    path: `/${process.env.VUE_APP_REPO_NAME}/error`,
    component: NotFound,
  },
  {
    path: `/${process.env.VUE_APP_REPO_NAME}/:pathMatch(.*)*`,
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
