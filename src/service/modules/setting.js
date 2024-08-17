import zwRequest from "../request"

export function getCurrentUserInfo() {
  return zwRequest.get({
    url: "/user/current"
  })
}

export function logout() {
  return zwRequest.post({
    url: "/user/logout"
  })
}
