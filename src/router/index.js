import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTasks from "../views/AllTasks";
import TaskItem from "../views/TaskItem";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'alltasks',
    component: AllTasks
  },
  {
    path: '/:id',
    component: TaskItem
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
