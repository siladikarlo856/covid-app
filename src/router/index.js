import { createRouter, createWebHistory } from 'vue-router';
import Summary from '../views/Summary.vue';
import NotFound from '../views/NotFound.vue';

const repoName = 'covid-app';

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
    path: `/${repoName}/summary`,
    name: 'Summary',
    component: Summary,
  },
  {
    path: `/${repoName}/perday/:country`,
    name: 'PerDay',
    // lazy loading route
    component: () =>
      import(/* webpackChunkName: 'perday' */ '../views/PerDay.vue'),
    props: true,
  },
  {
    path: `/${repoName}/:pathMatch(.*)*`,
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
