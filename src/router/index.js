import Vue from 'vue';
import VueRouter from 'vue-router';
import LayoutRoute from './modules/layout';
import LoginRoute from './modules/login';

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...LoginRoute,
    ...LayoutRoute,
  ],
});

export default router;
