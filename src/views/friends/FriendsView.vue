<script setup>
import { storeToRefs } from 'pinia'
import useFriendsStore from '@/stores/modules/friends'
import FriendList from './c-cpns/FriendList.vue'
import useLoginStore from '@/stores/modules/login'
import { onMounted } from 'vue'

// 底部tabbar可见
const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = true
})


const friendsStore = useFriendsStore()
const { friendList } = storeToRefs(friendsStore)

friendsStore.getFriendsAction()
</script>

<template>
  <div class="friends">
    <friend-list :friend-list="friendList"></friend-list>
  </div>
</template>


<style lang="less" scoped></style>