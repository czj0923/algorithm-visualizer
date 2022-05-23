<template>
  <div class="flex flex-col justify-center page-container">
    <div class="text-center">
      <img src="@/assets/images/404.svg" />
    </div>
    <div class="text-center">
      <p class="text-base">抱歉，你访问的页面不存在</p>
      <n-button type="info" @click="goHome">回到首页</n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goHome() {
  router.push("/");
}
</script>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  border-radius: 4px;
  padding: 50px 0;
  height: 100vh;

  .text-center {
    color: #666;
    padding: 20px 0;
    text-align: center;
    p {
      margin-bottom: 20px;
    }
  }

  img {
    width: 350px;
    margin: 0 auto;
  }
}
</style>
