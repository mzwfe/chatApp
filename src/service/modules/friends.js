import zwRequest from "../request"
export function getFriends() {
  return zwRequest.get({
    url: "/friend",
  })
}

export function getFriendsByName(name) {
  return zwRequest.get({
    url: `/user/search`,
    params: {
      username: name
    }
  })
}

export function addFriends(options) {
  // console.log(options)
  return zwRequest.post({
    url: '/user/friend/apply',
    data: {
      userId: options.userId,
      text: options.text
    }
  })
}