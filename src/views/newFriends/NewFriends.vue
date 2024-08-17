<script setup>
import router from '@/router';
import useLoginStore from '@/stores/modules/login'
import useNewFriendsStore from '@/stores/modules/newFriends'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import NewFriendCard from './c-cpns/NewFriendCard.vue'

const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = false
})

// 返回上级
const onClickLeft = () => {
  router.back()
}

const newFriendsStore = useNewFriendsStore()
const { newFriendsList } = storeToRefs(newFriendsStore)
</script>

<template>
  <div class="new-friends">
    <van-nav-bar title="好友验证" left-text="返回" left-arrow @click-left="onClickLeft" />
    <new-friend-card :newFriendsList="newFriendsList"></new-friend-card>
  </div>
</template>

<style lang="less" scoped>

</style>