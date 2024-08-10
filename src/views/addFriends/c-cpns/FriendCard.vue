<script setup>
import useFriendsStore from '@/stores/modules/friends'
import { computed, ref } from 'vue'

const props = defineProps(['friend'])
const imgUrl = computed(() => {
  return `data:image/png;base64,${props.friend.avatarUrl}`
})
const addText = ref('')
const show = ref(false)

// 添加好友
const friendsStore = useFriendsStore()
function handleAddFriend(id, text) {
  friendsStore.addFriendAction({
    userId: id,
    text: text
  }).then(() => {
    show.value = false
  })
}
</script>

<template>
  <div class="friend-card">
    <img class="avatar" :src="friend.avatarUrl? imgUrl : 'https://ts1.cn.mm.bing.net/th/id/R-C.448d85798307dd24a310f80f82f4311a?rik=yX9KaU4s9X4L6A&riu=http%3a%2f%2fimg.touxiangwu.com%2fuploads%2fallimg%2f2022053119%2f2nugfdkcplo.jpg&ehk=UmtIYPBJJIAh0gtt7UxbyuCCOPbFCNOfpQpdCHXBo34%3d&risl=&pid=ImgRaw&r=0'" alt="">
    <div class="text">{{ friend.username }}</div>
    <van-button @click="show = true" size="small" type="primary" v-if="!friend.isFriend">添加好友</van-button>
    <van-popup v-model:show="show" :style="{ padding: '64px' }">
        <van-field v-model="addText" placeholder="请输入留言" />
        <van-button @click="handleAddFriend(friend.id, addText)" size="small" type="primary">发送</van-button>
    </van-popup>
    <van-button size="small" disabled type="default" v-if="friend.isFriend">好友</van-button>
  </div>
</template>

<style lang="less" scoped>
.friend-card {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
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