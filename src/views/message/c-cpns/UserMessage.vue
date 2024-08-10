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
            <img :src="item.sessionIcon ? `data:image/png;base64,${item.sessionIcon}` : 'https://ts1.cn.mm.bing.net/th/id/R-C.448d85798307dd24a310f80f82f4311a?rik=yX9KaU4s9X4L6A&riu=http%3a%2f%2fimg.touxiangwu.com%2fuploads%2fallimg%2f2022053119%2f2nugfdkcplo.jpg&ehk=UmtIYPBJJIAh0gtt7UxbyuCCOPbFCNOfpQpdCHXBo34%3d&risl=&pid=ImgRaw&r=0'"
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