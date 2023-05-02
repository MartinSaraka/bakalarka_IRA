import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [

  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/RegisterPage.vue')
  },
  {
    path: '/',
    component: () => import('layouts/BasicLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      {
        path: 'road',
        name: 'road',
        component: () => import('pages/RoadPage.vue')
      },
      {
        path: 'reactionGame',
        name: 'reactionGame',
        component: () => import('pages/ReactionGame.vue')
      },
      {
        path: 'memoryGame',
        name: 'memoryGame',
        component: () => import('pages/MemoryGamePage.vue')
      },
      {
        path: 'differenceGame',
        name: 'differenceGame',
        component: () => import('pages/SpotDifferencePage.vue')
      },
      {
        path: 'informations',
        name: 'informations',
        component: () => import('pages/InformationPage.vue')
      },
      {
        path: 'videos',
        name: 'videos',
        component: () => import('pages/VideosPage.vue')
      },
      {
        path: 'games',
        name: 'games',
        component: () => import('pages/GamesPage.vue')
      },
      {
        path: 'gamesStatistics',
        name: 'gamesStatistics',
        component: () => import('pages/GamesStatisticsPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'gamesStatisticsList',
        name: 'gamesStatisticsList',
        component: () => import('pages/GamesStatisticsListPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'addPacient',
        name: 'addPacient',
        component: () => import('pages/AddPacientPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'main',
        name: 'main',
        component: () => import('pages/MainPage.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

function isLoggedIn () {
  const token = localStorage.getItem('access_token')
  return !!token
}
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default routes
