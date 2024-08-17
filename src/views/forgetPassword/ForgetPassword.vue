<script setup>
import router from '@/router';
import useLoginStore from '@/stores/modules/login'
import useUpdateStore from '@/stores/modules/update'
import { onMounted, ref } from 'vue'
const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = false
})

const updateStore = useUpdateStore()
const email = ref('')
const captcha = ref('')
const password = ref('')
const repeatPassword = ref('')
// 返回上级
function onClickLeft() {
  router.back()
}

// 获取验证码
function handleGetCaptcha() {
  updateStore.getCaptchaAction(email.value).then(res => {
    if (res.code !== 0) {
      showDialog({ message: res.description })
    }
  })
}

// 提交操作
function handleForgetSubmit() {
  updateStore.forgetSubmitAction({
    email: email.value,
    captcha: captcha.value,
    password: password.value,
    repeatPassword: repeatPassword.value
  }).then(res => {
    if (res.code !== 0) {
      showDialog({ message: res.description })
    } else {
      router.push('/login')
    }
  })
}
</script>

<template>
  <div class="forget-password">
    <van-nav-bar class="nav-bar" title="忘记密码" left-arrow @click-left="onClickLeft" />
    <van-cell-group inset>
      <van-field
        v-model="email"
        center
        clearable
        label="邮箱"
        placeholder="请输入邮箱"
      >
        <template #button>
          <van-button size="small" type="primary" @click="handleGetCaptcha">请求验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <van-cell-group inset>
      <van-field
        v-model="captcha"
        center
        clearable
        label="验证码"
        placeholder="请输入验证码"
      />
    </van-cell-group>
    <van-cell-group inset>
      <van-field
        v-model="password"
        center
        type="password"
        clearable
        label="新密码"
        placeholder="请输入新的密码"
      />
    </van-cell-group>
    <van-cell-group inset>
      <van-field
        v-model="repeatPassword"
        center
        type="password"
        clearable
        label="确认密码"
        placeholder="请确认密码"
      />
    </van-cell-group>
    <div class="submit">
      <van-button type="primary" @click="handleForgetSubmit">提交</van-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.forget-password {
  .nav-bar {
    margin-bottom: 20px;
  }

  .van-cell-group {
    margin-bottom: 10px;
  }

  .submit {
    margin-top: 20px;
    text-align: center;

    
  }
}
</style>