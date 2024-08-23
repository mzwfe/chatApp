<script setup>
import useMessageStore from '@/stores/modules/message'
import { storeToRefs } from 'pinia'
import UserMessage from './c-cpns/UserMessage.vue'
import { onMounted, ref } from 'vue'
import useLoginStore from '@/stores/modules/login'

const messageStore = useMessageStore()
const { messages } = storeToRefs(messageStore)

messageStore.getUserMessages()

// 底部tabbar可见
const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = true
})

// 处理下拉刷新
const userMessageRef = ref()
function handleRefreshMessage(loading) {
  messageStore.getUserMessages().then(() => {
    loading.value = false
  })
}

</script>


<template>
  <div class="Message">
    <van-nav-bar class="title" title="chat" />
    <user-message ref="userMessageRef" @refresh-message="handleRefreshMessage"
      :data-list="messages"></user-message>
  </div>
</template>

<style lang="less" scoped>
.title {
  :deep(.van-nav-bar__title) {
    font-size: 24px;
  }
}
</style>