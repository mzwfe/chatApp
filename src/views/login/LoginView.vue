<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
    </div>
    <h2 class="title">共鸣星球</h2>
    <label class="line" for="account">
      账号
      <input v-model="account" type="text" name="" id="account" placeholder="账号">
    </label>
    <label class="line" for="password">
      密码
      <input v-model="password" type="password" name="" id="password" placeholder="密码">
    </label>
    <button class="login-btn" @click="login">登陆</button>
    <div class="register">
      没有账号?去<span class="register-link" @click="registerAccount">注册</span>
    </div>
    <div class="forget">
      <span @click="forgetPassword">忘记密码?</span>
    </div>
  </div>
</template>

<script setup>
import useLoginStore from '@/stores/modules/login'
import { storeToRefs } from 'pinia'
import { showDialog } from 'vant';
import { onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const loginStore = useLoginStore()
const { account, password, isShowTabbar } = storeToRefs(loginStore)
isShowTabbar.value = false

localStorage.setItem('nowTabbar', 0)

const router = useRouter()
const login = () => {
  loginStore.commitAccountAction({
    userAccount: account.value,
    userPassword: password.value
  }).then((res) => {
    if (res.code !== 0) showDialog({ message: res.message })
    else router.replace("/message")
  })
}

function registerAccount() {
  router.push("/register")
}

onUnmounted(() => {
  isShowTabbar.value = true
})

// 忘记密码逻辑
function forgetPassword() {
  router.push("/forgetPassword")
}

</script>

<style lang="less" scoped>
.login {
  margin-top: 100px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }
  }

  .title {
    text-align: center;
    margin: 10px;
  }

  .line {
    display: flex;
    margin: 0 auto;
    width: 80vw;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #d3d0d0;

    input {
      width: 200px;
      margin-left: 10px;
    }
  }

  .login-btn {
    display: block;
    margin: 15px auto;
    width: 120px;
    height: 36px;
    border-radius: 20px;
    border: 2px solid #158be0;
    color: #158be0;
    background-color: #fff;
  }
}

.register {
  margin-top: 15px;
  text-align: center;

  .register-link {
    color: #158be0;
  }
}

.forget {
  margin-top: 10px;
  text-align: center;
  color: #158be0;
}
</style>