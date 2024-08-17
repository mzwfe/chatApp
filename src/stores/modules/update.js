import { forgetSubmit, getCaptcha, updateUserInfo } from "@/service/modules/update"
import { defineStore } from "pinia"

const useUpdateStore = defineStore('update', {
  state: () => ({}),
  actions: {
    async updateUserInfoAction(userinfo) {
      const res = updateUserInfo(userinfo)

      return res
    },
    async getCaptchaAction(email) {
      const res = await getCaptcha(email)

      return res
    },
    async forgetSubmitAction(userInfo) {
      const res = await forgetSubmit(userInfo)

      return res
    }
  }
})

export default useUpdateStore