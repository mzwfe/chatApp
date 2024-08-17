import axios from "axios"
import { BASE_URL2, TIME_OUT } from "./config"

class ZWRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
      withCredentials: true,
    })
  }

  requset(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.requset({ ...config, method: "get" })
  }

  post(config) {
    return this.requset({ ...config, method: "post" })
  }

  put(config) {
    return this.requset({ ...config, method: "put" })
  }
}
const zwRequest = new ZWRequest(BASE_URL2, TIME_OUT)

export default zwRequest
