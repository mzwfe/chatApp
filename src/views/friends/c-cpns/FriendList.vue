<script setup>
import FriendListItem from './FriendListItem.vue'
defineProps(['friendList'])
</script>

<template>
  <div class="friend-list">
    <van-index-bar :index-list="Object.keys(friendList)">
      <template v-for="itemX in friendList" :key="itemX">
        <van-index-anchor :index="itemX[0].indexChar" />
        <template v-for="itemY in itemX" :key="itemY.id">
          <van-cell>
            <template #title>
              <friend-list-item :username="itemY.username" :avatar="itemY.avatarUrl"></friend-list-item>
            </template>
          </van-cell>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped></style>