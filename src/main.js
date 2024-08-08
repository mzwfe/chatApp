import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import pinia from "./stores"
import "@/assets/css/reset.css"
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import { Toast, Dialog } from 'vant'


const app = createApp(App)

app.use(Toast).use(Dialog).use(router).use(pinia).mount("#app")
