<script setup>
import { storeToRefs } from 'pinia'
import useFriendsStore from '@/stores/modules/friends'
import FriendList from './c-cpns/FriendList.vue'
import useLoginStore from '@/stores/modules/login'
import { onMounted } from 'vue'
import router from '@/router'

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
  console.log('这是新的朋友消息~')
}
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
        <van-icon name="user-o" />
        新的朋友
      </template>
    </van-cell>
    <friend-list :friend-list="friendList"></friend-list>
  </div>
</template>


<style lang="less" scoped></style>