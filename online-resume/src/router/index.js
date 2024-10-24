import { createWebHistory, createRouter } from 'vue-router'

import MyResume from '../components/MyResume/MyResume.vue';
import MyWork from '../components/MyWork/MyWork.vue';

const routes = [
  { path: '/', redirect: '/resume' },
  { path: '/resume', name: 'My Resume', component: MyResume },
  { path: '/work', name: 'My Work', component: MyWork },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;