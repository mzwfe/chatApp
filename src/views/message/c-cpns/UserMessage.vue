<script setup>
import { defineProps, ref } from 'vue'
import formatTime from '@/utils/format-time'

defineProps(['dataList'])
const emit = defineEmits(['refreshMessage'])

const loading = ref(false)
function refreshMessage() {
  emit('refreshMessage', loading)
}

</script>

<template>
  <div class="user-message">
    <van-pull-refresh v-model="loading" @refresh="refreshMessage">
      <template v-for="item in dataList" :key="item.id">
        <div class="message">
          <div class="avatar">
            <img :src="item.sessionIcon ?? 'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'"
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
  height: 80px;
  padding: 10px;

  .avatar {
    position: relative;
    border-radius: 5px;

    img {
      height: 80px;
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
      font-weight: 700;
    }

    .text {
      width: 50px;
      font-size: 14px;
      margin-top: 20px;
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