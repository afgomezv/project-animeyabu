const LayoutRoute = [
  {
    path: "/",
    name: "Layout",
    component: () => import("../../views/Layout/Index.vue"),
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../../views/Home/Index.vue"),
      },
      {
        path: "all-categories",
        name: "AllCategories",
        component: () => import("../../views/AllCategories/Index.vue"),
      },
      {
        path: "create-categories",
        name: "CreateCategories",
        component: () => import("../../views/CreateCategories/Index.vue"),
      },
      {
        path: "update-categories",
        name: "UpdateCategories",
        component: () => import("../../views/UpdateCategories/Index.vue"),
      },
    ],
  },
];

export default LayoutRoute;
