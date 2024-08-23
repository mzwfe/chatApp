<script setup>
const props = defineProps(['username', 'avatar'])
</script>

<template>
  <div class="friend-list-item">
    <img class="avatar" :src="avatar" alt="">
    <div class="text">{{ username }}</div>
  </div>
</template>

<style lang="less" scoped>
.friend-list-item {
  display: flex;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }

  .text {
    margin-left: 10px;
    flex: 1;
    line-height: 40px;
  }
}
</style>