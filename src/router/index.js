import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nalog from '../views/Nalog.vue'
import Smestaj from '../views/Smestaj.vue'
import Utakmice from '../views/Utakmice.vue'
import Prva from '../views/Prva.vue'
import Registracija from '../components/Registracija.vue'
import Promena from '../components/Promena.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'prva',
    component: Prva
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/nalog',
    name: 'nalog',
    component: Nalog,
  },
  {
    path: '/smestaj',
    name: 'smestaj',
    component: Smestaj,
  },
  {
    path: '/utakmice',
    name: 'utakmice',
    component: Utakmice,
  },
{
  path: '/promena',
  name: 'promena',
  component: Promena
},
{
  path: '/registracija',
  name: 'registracija',
  component: Registracija
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
