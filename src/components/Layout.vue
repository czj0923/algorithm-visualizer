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
    <n-layout has-sider class="content-layout">
      <n-layout-sider
        width="200"
        show-trigger="arrow-circle"
        bordered
        @collapse="collapsed = true"
        @expand="collapsed = false"
        :collapsed="collapsed"
        collapse-mode="width"
        :collapsed-width="64"
      >
        <NMenu
          :options="menuOptions"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="20"
          @update:value="handleUpdateValue"
          :value="selectedKeys"
        />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { h, Component, ref } from "vue";
import type { MenuOption } from "naive-ui";
import { darkTheme, NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
import { useMainStore } from "@/store/main";
import {
  BarChartOutline,
  HomeOutline,
  CompassOutline,
  PricetagsOutline,
  AlertCircleOutline,
} from "@vicons/ionicons5";

const store = useMainStore();

const collapsed = ref<boolean>(false);

const changeTheme = () => {
  store.theme = store.theme ? null : darkTheme;
};

const selectedKeys = ref<string>(localStorage.getItem("route") as string);

const handleUpdateValue = (key: string, item: MenuOption) => {
  selectedKeys.value = item.key as string;
  localStorage.setItem("route", item.key as string);
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
            path: "/home",
          },
        },
        { default: () => "首页" }
      ),
    key: "home",
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
    key: "pathfinding",
    icon: renderIcon(CompassOutline),
  },
  {
    label: "排序算法",
    key: "sort",
    icon: renderIcon(BarChartOutline),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/sort/bubble",
              },
            },
            { default: () => "冒泡排序" }
          ),
        key: "bubble",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/sort/selection",
              },
            },
            { default: () => "选择排序" }
          ),
        key: "selection",
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: "/sort/insertion",
              },
            },
            { default: () => "插入排序" }
          ),
        key: "insertion",
      },
    ],
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/test",
          },
        },
        { default: () => "测试" }
      ),
    key: "test",
    icon: renderIcon(PricetagsOutline),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/about",
          },
        },
        { default: () => "关于" }
      ),
    key: "about",
    icon: renderIcon(AlertCircleOutline),
  },
];
</script>

<style scoped lang="scss">
.content-layout {
  height: calc(100vh - 61px);
}
.main-layout {
  height: 100vh;
  .nav {
    padding: 10px 20px;
    font-size: 24px;
  }
}
</style>
