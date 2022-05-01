<template>
  <n-config-provider :theme="store.theme">
    <n-message-provider :max="2">
      <MessageApi />
    </n-message-provider>
    <Layout />
  </n-config-provider>
</template>

<script lang="ts" setup>
import Layout from "@/components/Layout.vue";
import MessageApi from "@/components/message-api.vue";
import { NMessageProvider, NConfigProvider } from "naive-ui";
import { useMainStore } from "@/store/main";

const store = useMainStore();
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
