<template>
  <div>这里是首页</div>
  <Test v-model:title="a"></Test>
</template>

<script lang="ts" setup>
import Test from "./Test.vue";
import { ref } from "vue";
let a = ref(5);
</script>
<style scoped lang="scss"></style>
