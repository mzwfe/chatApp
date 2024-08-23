<script setup>
import useLoginStore from '@/stores/modules/login'
import { computed, onMounted, reactive, ref } from 'vue'
import useSettingStore from '@/stores/modules/setting'
import { storeToRefs } from 'pinia'
import router from '@/router'
import useUpdateStore from '@/stores/modules/update'

// 底部tabbar不可见
const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = false
})

// 数据回显
const settingStore = useSettingStore()
const { userinfo } = storeToRefs(settingStore)
settingStore.getCurrentUserInfoAction()

const commitUserInfo = reactive({
  username: userinfo.value.username,
  userId: userinfo.value.id,
  gender: userinfo.value.gender,
  updatePassword: userinfo.value.userPassword,
  email: userinfo.value.email,
  tags: userinfo.value.tags,
  phone: userinfo.value.phone
})

// 返回上级
function onClickLeft() {
  router.back()
}

// 修改用户信息
const updateStore = useUpdateStore()

function handleUpdateUserInfo() {
  updateStore.updateUserInfoAction(commitUserInfo).then(res => {
    if (res.code === 0) {
      showDialog({
        message: '修改个人信息成功'
      })
      router.push('/setting')
    } else {
      showDialog({
        message: '修改个人信息失败'
      })
    }
  })
}
// 上传头像
function afterRead(file) {
  const avatarFormData = new FormData()
  avatarFormData.append('image', file.file)

  updateStore.uploadUserAvatarAction(avatarFormData).then((res) => {
    if (res.code === 0) {
      // 修改本地存储的当前用户信息
      const userInfo = JSON.parse(localStorage.getItem('currentUserInfo'))
      userInfo.avatarUrl = res.data
      localStorage.removeItem('currentUserInfo')
      localStorage.setItem('currentUserInfo', JSON.stringify(userInfo))
      // 弹窗提示
      showDialog({
        message: '头像上传成功'
      })
    } else {
      showDialog({
        message: '头像上传失败'
      })
    }
  })
}

</script>

<template>
  <div class="update">
    <van-nav-bar title="修改信息" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group inset>
      <van-field v-model="commitUserInfo.username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="commitUserInfo.updatePassword" label="密码" placeholder="请输入密码" />
      <van-field v-model="commitUserInfo.email" label="邮箱" placeholder="请输入邮箱" />
      <van-field v-model="commitUserInfo.phone" label="手机号" placeholder="请输入手机号" />
      <van-field v-model="commitUserInfo.gender" label="性别" placeholder="请输入性别" />
      <van-field v-model="commitUserInfo.tags" label="标签" placeholder="请输入标签" />
      <van-field name="uploader" label="头像上传">
        <template #input>
          <van-uploader :after-read="afterRead" />
        </template>
      </van-field>
      <div class="btn">
        <van-button type="primary" @click="handleUpdateUserInfo">确定修改</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<style lang="less" scoped>
.btn {
  padding: 18px 0;
  text-align: center;
}
</style>