<template>
  <div class="tabbar" router>
    <van-tabbar v-model="active" :on-change="changeTabbar(active)">
      <van-tabbar-item replace to="/message" icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item replace to="/friends" icon="friends-o">好友</van-tabbar-item>
      <van-tabbar-item replace to="/setting" icon="contact-o">我</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(Number(localStorage.getItem('nowTabbar'))) ?? ref(0)


function changeTabbar(active) {
  localStorage.removeItem('nowTabbar')
  localStorage.setItem('nowTabbar', active)
}

</script>

<style lang="less" scoped>
.tabbar {
  height: 50px;
}
</style>