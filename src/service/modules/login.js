import zwRequest from "@/service/request"

export function commitAccount(config) {
  return zwRequest.post({
    url: "/user/login",
    data: {
      ...config
    }
  })
}