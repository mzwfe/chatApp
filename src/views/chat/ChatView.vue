<script setup>
import router from '@/router'
import useChatStore from '@/stores/modules/chat'
import useLoginStore from '@/stores/modules/login'
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ChatRow from './c-cpns/ChatRow.vue'

// 底部tabbar不可见
const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = false
})
const id = computed(() => router.currentRoute.value.query.sessionId)
const name = computed(() => router.currentRoute.value.query.name)
const type = computed(() => router.currentRoute.value.query.type)
const chatsRef = ref()
const loading = ref(false)
const scrollCount = ref(0)
const content = ref('')

// 返回上级
function onClickLeft() {
  router.back()
}

// 聊天记录加载
const chatStore = useChatStore()
const { chatList, chatInfo } = storeToRefs(chatStore)

const time = computed(() => {
  return chatList.value.length === 0 ? Date.now() : chatList.value[0].sendTime
})

chatStore.getChatListAction(time.value, id.value, type.value).then(() => {
  chatsRef.value.scrollTop = chatsRef.value.scrollHeight
})

// 下拉刷新
function onRefresh() {
  loading.value = true
  scrollCount.value++
  chatStore.getChatListAction(time.value, id.value, type.value)
  loading.value = false
}

// 组件销毁清空聊天记录
onUnmounted(() => {
  chatStore.clearChatListAction()
})

// 发送内容
function handleSendContent() {}
</script>

<template>
  <div class="chat">
    <van-nav-bar :title="name" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="chats" ref="chatsRef">
      <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <template v-for="item in chatList" :key="item.senderId">
          <chat-row :text="item.text" :me="item.me" :id="item.senderId" :avatar-url="chatInfo.avatarUrl"></chat-row>
        </template>
      </van-pull-refresh>
    </div>
    <van-cell-group inset>
      <van-field
        v-model="content"
        center
        clearable
        placeholder="请输入内容"
        :border="true"
      >
        <template #button>
          <van-button @click="handleSendContent" size="small" type="primary">发送</van-button>
        </template>
      </van-field>
    </van-cell-group>
  </div>
</template>

<style lang="less" scoped>
.chat {
  height: 100vh;
  .chats {
    box-sizing: border-box;
    padding: 10px 0;
    height: calc(100vh - 99px);
    overflow-y: scroll;
  }
}
</style>