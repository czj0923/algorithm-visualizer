import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/pathfinding",
    name: "pathfinding",
    component: () =>
      import(/* webpackChunkName: "pathfinding" */ "../views/Pathfinding.vue"),
  },
  {
    path: "/sort",
    name: "sort",
    component: () => import(/* webpackChunkName: "sort" */ "../views/Sort.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import(/* webpackChunkName: "Test" */ "../views/Test.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
