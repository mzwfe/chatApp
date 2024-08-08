import { getMessages } from "@/service"
import { defineStore } from "pinia"

const useMessageStore = defineStore("message", {
  state: () => ({
    messages: []
  }),
  actions: {
    async getUserMessages() {
      const res = await getMessages()
      this.messages = res.data
    }
  }
})

export default useMessageStore