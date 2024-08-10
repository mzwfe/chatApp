<script setup>
import router from '@/router'
import useFriendsStore from '@/stores/modules/friends'
import useLoginStore from '@/stores/modules/login'
import { onMounted, onUnmounted, ref } from 'vue'
import FriendCard from './c-cpns/FriendCard.vue'
import { storeToRefs } from 'pinia'

const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = false
})

const friendsStore = useFriendsStore()
const { searchFriends } = storeToRefs(friendsStore)
// 返回上级
function onClickLeft() {
  router.push('friends')
}

// 搜索功能实现
const searchValue = ref('')
function handleSearch() {
  friendsStore.getFriendsByNameAction(searchValue.value).then(res => {
    if (res.code !== 0) {
      showDialog({ message: res.description })
    }
  })
}

onUnmounted(() => {
  friendsStore.searchFriends = []
})
</script>

<template>
  <div class="add-friends">
    <van-nav-bar
      title="查找用户"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" show-action>
      <template #action>
        <van-button @click="handleSearch" type="primary" size="small">搜索</van-button>
      </template>
    </van-search>
    <template v-for="item in searchFriends" :key="item.id">
      <FriendCard :friend="item" />
    </template>
  </div>
</template>

<style lang="less" scoped>
:deep(.van-search__action) {
  display: flex;
}
</style>