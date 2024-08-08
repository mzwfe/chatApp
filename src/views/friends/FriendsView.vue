<script setup>
import useFriendsStore from '@/stores/modules/friends'

const friendsStore = useFriendsStore()
friendsStore.getFriendsAction()
</script>

<template>
  <div class="friends">
    <h2>friends</h2>
  </div>
</template>


<style lang="less" scoped></style>