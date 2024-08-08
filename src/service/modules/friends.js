import zwRequest from "../request"
export function getFriends() {
  return zwRequest.get({
    url: "/friend",
  })
}