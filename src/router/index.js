import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Info = () => import(/* webpackChunkName: "info" */ '../views/Info.vue');
const User = () => import(/* webpackChunkName: "user" */ '../views/User.vue');
const AddAccount = () => import(/* webpackChunkName: "addaccount" */ '../views/AddAccount.vue');
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/info',
    name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Info
  },
  {
    path: '/user',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: User
  },
  {
    path: '/addaccount',
    name: AddAccount,
    component: AddAccount
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  let token = Cookies.get('token');
  console.log(token);
  // debugger;
  // let token = localStorage.getItem('token');
  // if(!token&& to.path == '/'){
  //   console.log('user not login');
  //   window.location.href ='/user';
  // }
  next();
})
export default router
