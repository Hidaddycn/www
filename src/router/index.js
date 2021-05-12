import Vue from 'vue'
import VueRouter from 'vue-router'

let Home = () => import('views/home/Home.vue');
let Catalog = () => import('views/catalog/catalog.vue');
let Shop = () => import('views/shop/shop.vue');
let Profile = () => import('views/profile/profile.vue');


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'

  }
  ,
  
  {
    path:'/home',
    component:Home,
     meta:{
      title:'蘑菇购物街'
     }
  },
  {
    path:'/catalog',
    component:Catalog,
     meta:{
      title:'分类'
     }
  },
  {
    path:'/shop',
    component:Shop,
     meta:{
      title:'购物车'
     }
  },
  {
    path:'/profile',
    component:Profile,
     meta:{
      title:'我的'
     }
  }
  
    ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"active"
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next()
});
export default router
