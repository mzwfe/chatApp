<script setup>
import { defineProps, ref } from 'vue'
import formatTime from '@/utils/format-time'
import router from '@/router'

defineProps(['dataList'])
const emit = defineEmits(['refreshMessage'])

const loading = ref(false)
function refreshMessage() {
  emit('refreshMessage', loading)
}

function toChatPage(sessionId, name, type) {
  if (type === 1) {
    router.push({
      path: '/chat',
      query: {
        sessionId,
        name,
        type
      }
    })
  } else {
    alert('暂不支持群聊')
    // router.push({
    //   path: '/groupChat',
    //   query: {
    //     sessionId,
    //     name,
    //     type
    //   }
    // })
  }
}
</script>

<template>
  <div class="user-message">
    <van-pull-refresh v-model="loading" @refresh="refreshMessage">
      <template v-for="item in dataList" :key="item.sessionId">
        <div class="message" @click="toChatPage(item.sessionId, item.sessionName, item.type)">
          <div class="avatar">
            <img :src="item.sessionIcon"
              alt="" />
            <i class="dot" v-if="item.newMessage[0]?.newMesCount"></i>
          </div>
          <div class="content">
            <div class="name">{{ item.sessionName }}</div>
            <div class="text">{{ item.newMessage[0]?.text }}</div>
          </div>
          <div class="time">{{ formatTime(item.newMessage[0]?.sendTime) }}</div>
        </div>
      </template>
    </van-pull-refresh>
  </div>
</template>

<style lang="less" scoped>
.message {
  display: flex;
  height: 60px;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;

  .avatar {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 5px;

    img {
      height: 50px;
      width: 50px;
      border-radius: 8px;
    }

    .dot {
      position: absolute;
      right: -5px;
      top: -5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: red;
    }
  }

  .content {
    flex: 1;
    padding: 10px;
    margin-bottom: 10px;

    .name {
      font-size: 16px;
    }

    .text {
      width: 50px;
      font-size: 14px;
      margin-top: 10px;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .time {
    font-size: 12px;
    text-align: end;
    padding-top: 10px;
    color: #999;
  }
}
</style>