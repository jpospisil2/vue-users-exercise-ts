import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Users from '../views/Users.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '*',
    redirect: '/users',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
