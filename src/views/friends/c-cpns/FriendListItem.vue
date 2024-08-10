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
    <img class="avatar" :src="avatar? imgUrl : 'https://ts1.cn.mm.bing.net/th/id/R-C.448d85798307dd24a310f80f82f4311a?rik=yX9KaU4s9X4L6A&riu=http%3a%2f%2fimg.touxiangwu.com%2fuploads%2fallimg%2f2022053119%2f2nugfdkcplo.jpg&ehk=UmtIYPBJJIAh0gtt7UxbyuCCOPbFCNOfpQpdCHXBo34%3d&risl=&pid=ImgRaw&r=0'" alt="">
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