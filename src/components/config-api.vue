<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMessage, useLoadingBar } from "naive-ui";

export default defineComponent({
  setup() {
    window.$loading = useLoadingBar();
    window.$message = useMessage();
  },
});
</script>
