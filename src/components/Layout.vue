<template>
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
      <AStar />
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts" setup>
import { h } from "vue";
import { NMenu, NLayout, NLayoutSider, NLayoutContent } from "naive-ui";
import type { MenuOption } from "naive-ui";
import { RouterLink } from "vue-router";
import AStar from "@/views/AStar.vue";

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "astar",
          },
        },
        { default: () => "A Star" }
      ),
    key: "astar",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "",
          rel: "noopenner noreferrer",
        },
        "排序算法"
      ),
    key: "hear-the-wind-sing",
  },
];
</script>

<style scoped lang="scss"></style>
