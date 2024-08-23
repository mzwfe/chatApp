import { commitAccount } from "@/service"
import { defineStore } from "pinia"

const useLoginStore = defineStore("login", {
  state: () => ({
    account: "",
    password: "",
    isShowTabbar: true
  }),
  actions: {
    async commitAccountAction(config) {
      const res = await commitAccount(config)

      localStorage.setItem("currentUserInfo", JSON.stringify(res.data))
      return res
    }
  }
})

export default useLoginStore