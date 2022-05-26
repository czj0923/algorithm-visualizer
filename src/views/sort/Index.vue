<template>
  <n-grid
    x-gap="12"
    y-gap="12"
    cols="xs:1 l:2"
    responsive="screen"
    class="sort-page"
  >
    <n-gi>
      <router-view></router-view>
    </n-gi>
    <n-gi><OperationArea /> </n-gi>
  </n-grid>
</template>

<script lang="ts" setup>
import OperationArea from "./OperationArea.vue";
</script>
<style lang="scss">
.sort-page {
  height: 500px;
  .tool-panel {
    .cur {
      color: #f00;
    }
  }
  .flip-list-move {
    transition: transform 0.3s ease 0.3s;
  }
  .panel {
    height: 100%;
    padding: 0 10px;
    background-color: rgb(255, 237, 209);
    position: relative;
    .n-tag {
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .bar-wrap {
      display: flex;
      align-items: flex-end;
      position: absolute;
      width: calc(100% - 20px);
      bottom: 0;
    }
  }
  .bar {
    height: 450px;
    background-color: rgb(39, 169, 169);
    flex-grow: 1;
    position: relative;
    border: 1px solid #000;
    &:not(:last-child) {
      margin-right: 5px;
    }
    &.switch {
      background-color: rgb(255, 183, 0);
    }
    &.finish {
      background-color: rgb(0, 176, 0);
    }
    &.min {
      background-color: #f00;
      &::before {
        content: "min";
        position: absolute;
        color: #fff;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .num {
      position: absolute;
      bottom: 0;
      left: 50%;
      font-weight: 600;
      transform: translateX(-50%);
      font-size: 16px;
    }
  }
}
</style>
