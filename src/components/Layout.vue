<template>
  <n-layout class="main-layout">
    <n-layout-header bordered class="nav">
      顶部栏
      <n-button quaternary type="success" @click="changeTheme">
        {{ store.theme ? "浅色" : "深色" }}
      </n-button></n-layout-header
    >
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
      <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { h } from "vue";
import {
  NMenu,
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NLayoutHeader,
  NButton,
  darkTheme,
} from "naive-ui";
import type { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";
import { useMainStore } from "@/store/main";

const store = useMainStore();

const changeTheme = () => {
  store.theme = store.theme ? null : darkTheme;
};

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
        { default: () => "home" }
      ),
    key: "astar",
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
        { default: () => "Pathfinding" }
      ),
    key: "2",
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
  },
];
</script>

<style scoped lang="scss">
.main-layout {
  min-height: 100vh;
  .nav {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
