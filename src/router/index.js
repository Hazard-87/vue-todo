import Vue from 'vue'
import VueRouter from 'vue-router'
import AllLists from "../views/AllLists";
import Tasks from "../views/Tasks";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all-lists',
    component: AllLists
  },
  {
    path: '/:id',
    component: Tasks
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
