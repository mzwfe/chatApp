import { getChatList } from "@/service/modules/chat"
import { defineStore } from "pinia"

const useChatStore = defineStore('chat', {
  state: () => ({
    chatList: [],
    chatInfo: {}
  }),
  actions: {
    async getChatListAction(time, receiveId, type) {
      const res = await getChatList(time, receiveId, type)
      if (res.code !== 0) return
      this.chatList.unshift(...res.data?.chatMessages)
      this.chatInfo = res.data.sender

      return res
    },

    clearChatListAction() {
      this.chatList = []
    }
  }
})

export default useChatStore