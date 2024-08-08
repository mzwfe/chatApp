import zwRequest from "@/service/request"

export function registerNewUser(userInfo) {
  return zwRequest.post({
    url: '/user/register',
    data: userInfo
  })
}