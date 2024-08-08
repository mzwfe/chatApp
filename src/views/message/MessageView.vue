<template>
  <div class="Message">
    <h2 class="title">chat</h2>
    <user-message ref="userMessageRef" @refresh-message="handleRefreshMessage" :data-list="messages"></user-message>
  </div>
</template>

<script setup>
import useMessageStore from '@/stores/modules/message'
import { storeToRefs } from 'pinia'
import UserMessage from './c-cpns/UserMessage.vue'
import { ref } from 'vue';

const messageStore = useMessageStore()
const { messages } = storeToRefs(messageStore)

messageStore.getUserMessages()

// 处理下拉刷新
const userMessageRef = ref()
function handleRefreshMessage(loading) {
  messageStore.getUserMessages().then(() => {
    loading.value = false
  })
}

</script>

<style lang="less" scoped>
.title {
  text-align: center;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}
</style>