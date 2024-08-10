import { addFriends, getFriends, getFriendsByName } from "@/service/modules/friends"
import { defineStore } from "pinia"

const useFriendsStore = defineStore("friends", {
  state: () => ({
    friendList: [],
    searchFriends: []
  }),
  actions: {
    async getFriendsAction() {
      const res = await getFriends()
      this.friendList = res.data
      return res
    },
    async getFriendsByNameAction(name) {
      const res = await getFriendsByName(name)
      this.searchFriends = res.data
      return res
    },
    async addFriendAction(options) {
      console.log(options)
      const res = await addFriends(options)
      return res
    }
  }
})

export default useFriendsStore
