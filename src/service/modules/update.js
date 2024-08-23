import zwRequest, { zwRequest2 } from "../request"

export function updateUserInfo(userInfo) {
  return zwRequest.post({
    url: "/user/update",
    data: userInfo
  })
}

export function getCaptcha(email) {
  return zwRequest.get({
    url: "/common/send/emailCode",
    params: {
      email: email
    }
  })
}
// 2285366481@qq.com

export function forgetSubmit(userInfo) {
  return zwRequest.post({
    url: "/user/retrieve/password",
    data: {
      code: userInfo.captcha,
      email: userInfo.email,
      password: userInfo.password,
      repeatPassword: userInfo.repeatPassword
    }
  })
}

export function uploadUserAvatar(formdata) {
  return zwRequest.post({
    url: "/common/upload",
    data: formdata,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
