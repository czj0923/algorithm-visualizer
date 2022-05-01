<template>
  <n-layout class="main-layout">
    <n-layout-header bordered class="nav">
      <n-space justify="space-between" align="center">
        <span>算法与数据结构可视化</span>
        <n-button quaternary type="success" @click="changeTheme">
          {{ store.theme ? "浅色" : "深色" }}
        </n-button>
      </n-space>
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="13"
        :width="240"
        show-trigger="arrow-circle"
        bordered
      >
        <n-menu :options="menuOptions" />
      </n-layout-sider>
      <n-scrollbar>
        <n-layout-content content-style="padding: 24px;">
          <router-view />
        </n-layout-content>
      </n-scrollbar>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { h, Component } from "vue";
import { NScrollbar, NSpace } from "naive-ui";
import {
  NMenu,
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NLayoutHeader,
  NButton,
  darkTheme,
  NIcon,
} from "naive-ui";
import type { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";
import { useMainStore } from "@/store/main";
import {
  BarChartOutline,
  HomeOutline,
  CompassOutline,
} from "@vicons/ionicons5";

const store = useMainStore();

const changeTheme = () => {
  store.theme = store.theme ? null : darkTheme;
};

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/",
          },
        },
        { default: () => "首页" }
      ),
    key: "astar",
    icon: renderIcon(HomeOutline),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/pathfinding",
          },
        },
        { default: () => "寻路算法" }
      ),
    key: "2",
    icon: renderIcon(CompassOutline),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/echarts",
          },
        },
        { default: () => "echarts" }
      ),
    key: "3",
    icon: renderIcon(BarChartOutline),
  },
];
</script>

<style scoped lang="scss">
.main-layout {
  min-height: 100vh;
  .nav {
    padding: 10px 20px;
    font-size: 24px;
  }
}
</style>
