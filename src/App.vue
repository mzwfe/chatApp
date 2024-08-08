<template>
  <div class="App">
    <router-view></router-view>
    <tabbar v-if="isShowTabbar" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import Tabbar from './components/tabbar/TabbarView.vue';
import useLoginStore from './stores/modules/login';

const loginstore = useLoginStore()
const { isShowTabbar } = storeToRefs(loginstore)

</script>

<style lang="less" scoped>

</style>