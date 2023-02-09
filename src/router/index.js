import Vue from 'vue'
import VueRouter from 'vue-router'
import forePro from '../components/forePro.vue'
import Home from '../components/home.vue'
import checkShow from '../components/checkShow.vue'
import checkSum from '../components/checkSum.vue'
import checkDet from '../components/checkDet.vue'
import SKcompare from '../components/SKcompare.vue'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/forePro',
  component: Home,
  children: [{
    path: '/forePro',
    component: forePro
  },
  {
    path: '/checkShow',
    component: checkShow
  },
  {
    path: '/checkSum',
    component: checkSum
  },
  {
    path: '/checkDet',
    component: checkDet
  },
  {
    path: '/SKcompare',
    component: SKcompare
  }
  ]
}
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
