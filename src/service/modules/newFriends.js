import zwRequest from "../request";

export function getNewFriends() {
  return zwRequest.get({
    url: "/user/friend/list"
  })
}

export function acceptFriend(id) {
  return zwRequest.put({
    url: "/user/friend",
    params: { applyFriendId: id, status: 1 }
  })
}
