import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: () =>
      import(/* webpackChunkName: "Layout" */ "../components/Layout.vue"),
    redirect: "home",
    children: [
      {
        path: "home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "pathfinding",
        name: "pathfinding",
        component: () =>
          import(
            /* webpackChunkName: "pathfinding" */ "../views/pathfinding/Pathfinding.vue"
          ),
      },
      {
        path: "bubble",
        name: "bubble",
        meta: {
          title: "冒泡排序",
        },
        component: () =>
          import(
            /* webpackChunkName: "BubbleSort" */ "../views/sort/BubbleSort.vue"
          ),
      },
      {
        path: "test",
        name: "test",
        component: () =>
          import(/* webpackChunkName: "Test" */ "../views/Test.vue"),
      },
      {
        path: "canvas",
        name: "canvas",
        component: () =>
          import(
            /* webpackChunkName: "Test" */ "../views/pathfinding/CanvasMap.vue"
          ),
      },
      {
        path: "/:pathMatch(.*)",
        name: "404",
        component: () => import("@/views/404.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
