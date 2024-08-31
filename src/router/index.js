import { createRouter, createWebHashHistory } from "vue-router"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/login/LoginView.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/message/MessageView.vue"),
    },
    {
      path: "/setting",
      component: () => import("@/views/setting/SettingView.vue"),
    },
    {
      path: "/friends",
      component: () => import("@/views/friends/FriendsView.vue"),
    },
    {
      path: "/register",
      component: () => import("@/views/register/RegisterView.vue"),
    },
    {
      path: "/update",
      component: () => import("@/views/update/UpdateView.vue"),
    },
    {
      path: "/addFriends",
      component: () => import("@/views/addFriends/AddFriends.vue"),
    },
    {
      path: "/newFriends",
      component: () => import("@/views/newFriends/NewFriends.vue"),
    },
    {
      path: "/forgetPassword",
      component: () => import("@/views/forgetPassword/ForgetPassword.vue"),
    },
    {
      path: "/chat",
      component: () => import("@/views/chat/ChatView.vue"),
      query: {
        id: ""
      }
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/notFound/NotFound.vue')
    },
  ],
})

export default router
