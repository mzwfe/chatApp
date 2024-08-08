import zwRequest from "../request"

export function updateUserInfo(userInfo) {
  return zwRequest.post({
    url: "/user/update",
    data: userInfo
  })  
}