import { createRouter, createWebHashHistory } from "vue-router"
const router = createRouter({

  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: () => import("@/views/login/LoginView.vue")
    },
    {
      path: "/message",
      component: () => import("@/views/message/MessageView.vue")
    },
    {
      path: "/setting",
      component: () => import("@/views/setting/SettingView.vue")
    },
    {
      path: "/friends",
      component: () => import("@/views/friends/FriendsView.vue")
    },
    {
      path: "/register",
      component: () => import("@/views/register/RegisterView.vue")
    }
  ]
})

export default router