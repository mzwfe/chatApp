<script setup>
import router from '@/router'
import useLoginStore from '@/stores/modules/login'
import useRegisterStore from '@/stores/modules/register'
import { showDialog } from 'vant';
import { onMounted, reactive } from 'vue'

// 设置底部导航不可见
const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = false
})

const registerStore = useRegisterStore()

const userInfo = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
  gender: '',
  userEmail: ''
})

function submitUserInfo() {
  registerStore.registerNewUserAction(userInfo).then((res) => {
    if (res.code !== 0) {
      showDialog({ message: res.description })
    } else {
      showDialog({ message: '注册成功' })
      router.push("/login")
    }
  })
}

function onClickLeft() {
  router.push("/login")
}

</script>

<template>
  <div class="register">
    <van-nav-bar
      title="注册帐号"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="register-box">
      <label for="account">
        <span>帐号</span>
        <input id="account" type="text" placeholder="请输入账号" v-model="userInfo.userAccount">
      </label>
      <label for="password">
        <span>密码</span>
        <input id="password" type="password" placeholder="请输入密码" v-model="userInfo.userPassword">
      </label>
      <label for="checkPassword">
        <span>确认密码</span>
        <input id="checkPassword" type="password" placeholder="请确认密码"
          v-model="userInfo.checkPassword">
      </label>
      <label for="sex">
        <span>性别</span>
        <input id="sex" type="text" placeholder="请输入性别" v-model="userInfo.gender">
      </label>
      <label for="mail">
        <span>邮箱</span>
        <input id="mail" type="email" placeholder="请输入邮箱" v-model="userInfo.userEmail">
      </label>
      <div class="submit">
        <van-button size="large" type="primary" @click="submitUserInfo">注册</van-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.register {

  .register-box {
    padding: 60px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    label {
      width: 100%;
      border-bottom: 1px solid #d3d0d0;

      span {
        display: inline-block;
        width: 64px;
        text-align-last: justify;
      }
    }

    input {
      margin-top: 20px;
      margin-left: 5px;
      height: 25px;
      border-radius: 5px;
      font-size: 12px;
    }
  }

  .submit {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
  }
}
</style>