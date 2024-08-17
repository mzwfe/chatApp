import { acceptFriend, getNewFriends } from "@/service/modules/newFriends"
import { defineStore } from "pinia"

const useNewFriendsStore = defineStore('newFriends', {
  state: () => ({
    newFriendsList: []
  }),
  actions: {
    async getNewFriendsAction() {
      const res = await getNewFriends()
      this.newFriendsList = res.data

      return res
    },
    async acceptFriendAction(id) {
      const res = await acceptFriend(id)

      return res
    }
  }
})

export default useNewFriendsStore
