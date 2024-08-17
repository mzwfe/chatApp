<script setup>
import router from '@/router';
import useNewFriendsStore from '@/stores/modules/newFriends'
import formatTime from '@/utils/format-time'

defineProps(['newFriendsList'])

const newFriendsStore = useNewFriendsStore()
// 接受好友请求
function handleAccept(id) {
  newFriendsStore.acceptFriendAction(id).then(() => {
    router.back()
  })
}
</script>

<template>
  <div class="new-friend-card">
    <template v-for="item in newFriendsList" :key="item.applyUserId">
      <div class="message">
  `      <div class="avatar">
          <img :src="item.avatarUrl ? `data:image/png;base64,${item.avatarUrl}` : 'https://ts1.cn.mm.bing.net/th/id/R-C.448d85798307dd24a310f80f82f4311a?rik=yX9KaU4s9X4L6A&riu=http%3a%2f%2fimg.touxiangwu.com%2fuploads%2fallimg%2f2022053119%2f2nugfdkcplo.jpg&ehk=UmtIYPBJJIAh0gtt7UxbyuCCOPbFCNOfpQpdCHXBo34%3d&risl=&pid=ImgRaw&r=0'"
            alt="" />
        </div>
        <div class="content">
          <div class="name">{{ item.username }}</div>
          <div class="text">{{ item.text }}</div>
        </div>
        <div class="time">
          <span>{{ formatTime(item.createTime) }}</span>
          <van-button v-if="item.status === 0" type="primary" @click="handleAccept(item.applyUserId)" size="small">接受</van-button>
          <van-button v-if="item.status === 1" type="primary" disabled size="small">已添加</van-button>
        </div>
      </div>`
    </template>
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
      width: auto;
      font-size: 14px;
      margin-top: 10px;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    text-align: end;
    padding-top: 10px;
    color: #999;
  }
}
</style>