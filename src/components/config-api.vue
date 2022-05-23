<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMessage, useLoadingBar } from "naive-ui";

export default defineComponent({
  setup() {
    //挂载在window上
    window.$loading = useLoadingBar();
    window.$message = useMessage();
  },
});
</script>
