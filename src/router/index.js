import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Competition from '../views/Competition.vue'
import TeamList from '../views/TeamList.vue'
import Team from '../views/Team.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/competitions/:id',
    name: 'League List',
    component: Competition
  },
  {
    path: '/teams',
    name: 'Team list',
    component: TeamList
  },
  {
    path: '/teams/:id/matches',
    name: 'Team',
    component: Team
  },
  {
    path: '/404',
    name: '404',
    component: PageNotFound
  },
  {
    path: '*',
    redirect: { name: '404' }
  }
]

const router = new VueRouter({
  base: location.pathname,
  mode: 'history',
  routes
})

export default router
