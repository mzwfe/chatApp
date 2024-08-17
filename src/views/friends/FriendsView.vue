<script setup>
import { storeToRefs } from 'pinia'
import useFriendsStore from '@/stores/modules/friends'
import FriendList from './c-cpns/FriendList.vue'
import useLoginStore from '@/stores/modules/login'
import { onMounted } from 'vue'
import router from '@/router'
import useNewFriendsStore from '@/stores/modules/newFriends'


// 底部tabbar可见
const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = true
})

const friendsStore = useFriendsStore()
const { friendList } = storeToRefs(friendsStore)

friendsStore.getFriendsAction()

// 跳转添加好友页面
function toAddFriendsPage() {
  router.push('/addFriends')
}

// 跳转新的朋友验证消息页面
function toNewAddFriendsPage() {
  router.push('/newFriends')
}

// 申请好友列表信息
const newFriendsStore = useNewFriendsStore()
const { newFriendsList } = storeToRefs(newFriendsStore)
newFriendsStore.getNewFriendsAction()
</script>

<template>
  <div class="friends">
    <van-nav-bar title="好友" />
    <van-cell @click="toAddFriendsPage">
      <template #title>
        <van-icon name="search" />
        添加好友
      </template>
    </van-cell>
    <van-cell @click="toNewAddFriendsPage">
      <template #title>
        <div class="content">
          <van-icon name="user-o" />
          <span class="text">新的朋友</span>
          <div class="dot" v-if="newFriendsList?.length">{{ newFriendsList?.length }}</div>
        </div>
      </template>
    </van-cell>
    <friend-list :friend-list="friendList"></friend-list>
  </div>
</template>


<style lang="less" scoped>
.content {
  display: flex;
  align-items: center;

  .text {
    margin-left: 4px;
  }

  .dot {
    background-color: #f00;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: #fff;
    margin-left: auto;
    text-align: center;
    line-height: 20px;
  }
}
</style>