import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const Find = () => import('@/views/Find')
const News = () => import('@/views/News')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const Registe = () => import('@/views/Registe')
const City = () => import('@/views/Home/components/City.vue')
const MyCollect = () => import('@/views/My/components/MyCollect.vue')
const MyLet = () => import('@/views/My/components/MyLet.vue')
const Publish = () => import('@/views/Home/components/Publish.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      },
      { path: '/find', component: Find },
      { path: '/news', component: News },
      { path: '/my', component: My }
    ]
  },
  { path: '/login', component: Login },
  { path: '/registe', component: Registe },
  { path: '/city', component: City },
  { path: '/mycollect', component: MyCollect },
  { path: '/mylet', component: MyLet },
  { path: '/publish', component: Publish }
]

const router = new VueRouter({
  routes
})

export default router
