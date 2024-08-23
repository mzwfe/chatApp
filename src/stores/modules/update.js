import { forgetSubmit, getCaptcha, updateUserInfo, uploadUserAvatar } from "@/service/modules/update"
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
    },
    async uploadUserAvatarAction(formdata) {
      const res = await uploadUserAvatar(formdata)

      return res
    }
  }
})

export default useUpdateStore