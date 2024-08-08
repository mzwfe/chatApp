import { getCurrentUserInfo } from "@/service/modules/setting"
import { defineStore } from "pinia"

const useSettingStore = defineStore('setting', {
  state: () => ({
    userinfo: {}
  }),
  actions: {
    async getCurrentUserInfoAction() {
      const res = await getCurrentUserInfo()
      this.userinfo = res.data
      return res
    }
  }
})

export default useSettingStore