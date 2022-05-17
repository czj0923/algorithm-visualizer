<template>
  <div>测试组件{{ title }}</div>
  <button @click="$emit('update:title', 65)">点击事件</button>
  <button @click="$emit('update:title', 6222)">点击事件2</button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
defineProps<{
  title: number;
}>();
defineEmits(["update:title"]);
</script>
<style scoped lang="scss"></style>
