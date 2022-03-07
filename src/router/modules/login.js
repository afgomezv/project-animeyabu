const LoginRoute = [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../../views/Login/Index.vue'),
    },
    {
      path: '/register-account',
      name: 'RegisterAccount',
      component: () => import('../../views/Register/Index.vue'),
    },
  ];
  export default LoginRoute;