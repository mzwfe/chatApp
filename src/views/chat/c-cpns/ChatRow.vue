<script setup>
defineProps(['id', 'avatarUrl', 'text', 'me'])
const currentUserInfo = JSON.parse(localStorage.getItem('currentUserInfo'))
</script>

<template>
  <div class="chat-row">
    <div class="not-me" v-if="!me">
      <div class="avatar">
        <img :src="avatarUrl" alt="">
      </div>
      <div class="text">
        <span>{{ text }}</span>
      </div>
    </div>
    <div class="me" v-if="me">
      <div class="me-avatar">
        <img :src="currentUserInfo.avatarUrl" alt="">
      </div>
      <div class="me-text">
        <span>{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.chat-row {
  margin: 0 10px;
}

.not-me {
  display: flex;
  width: 100%;
  margin-bottom: 10px;

  .avatar {

    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }

  .text {
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 0 15px;
    line-height: 20px;
    background-color: aliceblue;
    border-radius: 8px;

    span {
      display: block;
      width: 100%;
      text-wrap: wrap;
      word-break: break-all;
    }
  }
}

.me {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-bottom: 10px;

  .me-avatar {

    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  }

  .me-text {
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 0 15px;
    line-height: 20px;
    background-color: aliceblue;
    border-radius: 8px;

    span {
      display: block;
      width: 100%;
      text-wrap: wrap;
      word-break: break-all;
    }
  }
}
</style>