import zwRequest from "../request"

export function getCurrentUserInfo() {
  return zwRequest.get({
    url: "/user/current"
  })
}