import zwRequest from "@/service/request"

export function getMessages() {
  return zwRequest.get({
    url: "/session",
    xhrFields: {
      withCredentials: true,
    },
  });
}
