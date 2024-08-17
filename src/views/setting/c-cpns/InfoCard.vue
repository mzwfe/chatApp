<script setup>
import { computed } from 'vue'
import { formatTimeSetting } from '@/utils/format-time'

const props = defineProps(['userinfo'])

const imgUrl = computed(() => {
  if (props.userinfo === null) {
    return ''
  } else {
    return `data:image/png;base64,${props.userinfo.avatarUrl}`
  }
})

</script>

<template>
  <div class="info-card">
    <div class="userAccount text">
      <span>帐号</span>
      <div>
        <span>{{ userinfo?.userAccount }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="username text">
      <span>用户名</span>
      <div>
        <span>{{ userinfo?.username }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="avatar">
      <span>头像</span>
      <div>
        <img :src="imgUrl" alt="">
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="gender text">
      <span>性别</span>
      <div>
        <span>{{ userinfo?.gender }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="phone text">
      <span>手机号</span>
      <div>
        <span>{{ userinfo?.phone }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="email text">
      <span>邮箱</span>
      <div>
        <span>{{ userinfo?.email }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="tags text">
      <span>用户标签</span>
      <div>
        <span>{{ userinfo?.tags }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="createTime text">
      <span>创建时间</span>
      <div>
        <span>{{ formatTimeSetting(userinfo?.createTime) }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 18px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #eee;

  &:active {
    background-color: #eee;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: 10px;
    }
  }
}

.avatar {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 18px;
  border-bottom: 1px solid #eee;
  font-size: 14px;

  &:active {
    background-color: #eee;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 60px;
      height: 60px;
      margin-right: 10px;
    }
  }

}
</style>