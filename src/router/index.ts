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
        path: "sort",
        name: "sort",
        component: () =>
          import(/* webpackChunkName: "sort" */ "../views/sort/Index.vue"),
        children: [
          {
            path: "bubble",
            name: "bubble",
            meta: {
              title: "冒泡排序",
              type: "sort",
            },
            component: () =>
              import(
                /* webpackChunkName: "bubble" */ "../views/sort/BubbleSort.vue"
              ),
          },
          {
            path: "selection",
            name: "selection",
            meta: {
              title: "选择排序",
              type: "sort",
            },
            component: () =>
              import(
                /* webpackChunkName: "selection" */ "../views/sort/SelectSort.vue"
              ),
          },
          {
            path: "insertion",
            name: "insertion",
            meta: {
              title: "插入排序",
              type: "sort",
            },
            component: () =>
              import(
                /* webpackChunkName: "insertion" */ "../views/sort/InsertionSort.vue"
              ),
          },
        ],
      },

      {
        path: "test",
        name: "test",
        component: () =>
          import(/* webpackChunkName: "Test" */ "../views/Test.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/about/index.vue"),
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
