<script setup>
import useSettingStore from '@/stores/modules/setting'
import InfoCard from './c-cpns/InfoCard.vue'
import { storeToRefs } from 'pinia'
import useLoginStore from '@/stores/modules/login'
import { onMounted } from 'vue'
import router from '@/router'

// 底部tabbar可见
const loginStore = useLoginStore()
onMounted(() => {
  loginStore.isShowTabbar = true
})

const settingStore = useSettingStore()
const { userinfo } = storeToRefs(settingStore)
settingStore.getCurrentUserInfoAction()

function toUpdatePage() {
  router.push('/update')
}

</script>

<template>
  <div class="setting">
    <van-nav-bar title="个人信息" />
    <info-card :userinfo="userinfo" @click="toUpdatePage"></info-card>
  </div>
</template>

<style lang="less" scoped></style>