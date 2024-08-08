<script setup>
import { computed } from 'vue'

const props = defineProps(['username', 'avatar'])

// 将后端的字节码转为图片url
const imgUrl = computed(() => {
  return `data:image/png;base64,${props.avatar}`
})
</script>

<template>
  <div class="friend-list-item">
    <img class="avatar" :src="avatar? imgUrl : 'https://img.zcool.cn/community/04b4wf2hltswlkpp4qebcs3937.png'" alt="">
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