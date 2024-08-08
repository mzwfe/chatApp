import { getFriends } from "@/service/modules/friends"
import { defineStore } from "pinia"

const useFriendsStore = defineStore("friends", {
  state: () => ({
    friendList: []
  }),
  actions: {
    async getFriendsAction() {
      const res = await getFriends()
      this.friendList = res.data
      return res
    }
  }
})

export default useFriendsStore
