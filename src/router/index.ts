import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/astar",
    name: "astar",
    component: () =>
      import(/* webpackChunkName: "astar" */ "../views/AStar.vue"),
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
