<template>
  <n-layout>
    <n-layout-header bordered> Header </n-layout-header>
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
} from "naive-ui";
import type { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";

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
            path: "/astar",
          },
        },
        { default: () => "A Star" }
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
.n-layout {
  min-height: 100vh;
}
</style>
