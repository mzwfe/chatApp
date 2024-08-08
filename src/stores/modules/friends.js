import { getFriends } from "@/service/modules/friends"
import { defineStore } from "pinia"

const useFriendsStore = defineStore("friends", {
  state: () => ({}),
  actions: {
    async getFriendsAction() {
      const res = await getFriends()
      console.log(res)
      return res
    }
  }
})

export default useFriendsStore
