import { updateUserInfo } from "@/service/modules/update"
import { defineStore } from "pinia"

const useUpdateStore = defineStore('update', {
  state: () => ({}),
  actions: {
    updateUserInfoAction(userinfo) {
      const res = updateUserInfo(userinfo)

      return res
    }
  }
})

export default useUpdateStore