import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
   {
    path: '/classfiy',
    name: 'classfiy',
    component: () => import('../views/classfiy.vue')
  }, 
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue'),
    meta:{
      requireAuth:true
    }
  },
  {
    path:"/detail:id",
    name:"detail",
    component: () => import('../views/detail.vue')
  },
  {
    path:"/logoin",
    name:"logoin",
    component: () => import('../views/logoin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    if(localStorage.getItem("token")){
      next()
    }else{
      next({
        path:"/logoin"
      })
    }
  }else{
    next()
  }
})
export default router
