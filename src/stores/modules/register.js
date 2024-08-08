import { registerNewUser } from "@/service/modules/register"
import { defineStore } from "pinia"

const useRegisterStore = defineStore("register", {
  state: () => ({}),
  actions: {
    async registerNewUserAction(userInfo) {
      const res = await registerNewUser(userInfo)
      return res
    }
  }
})

export default useRegisterStore
