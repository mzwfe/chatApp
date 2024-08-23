import zwRequest from "../request"

export function getChatList(time, receiveId, type) {
  return zwRequest.get({
    url: "/chat/history",
    params: {
      time: time,
      receiveId: receiveId,
      type: type
    }
  })
}