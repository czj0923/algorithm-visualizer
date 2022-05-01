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
    path: "/echarts",
    name: "echarts",
    component: () =>
      import(/* webpackChunkName: "EchartsTest" */ "../views/EchartsTest.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
