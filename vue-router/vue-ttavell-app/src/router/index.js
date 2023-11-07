import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'

const routes =  [
    { path: '/', name: 'Home', component: Home },
    { path: '/brazil', name: 'Brazil', component: ()=>import('@/views/Brazil.vue')},
    { path: '/jamaica', name: 'Jamaica', component: ()=>import('@/views/jamaica.vue')},
    { path: '/hawaii', name: 'Hawaii', component: ()=>import('@/views/Hawaii.vue')},
    { path: '/panama', name: 'Panama', component: ()=>import('@/views/panama.vue')},
    {path: '/vue-travel/:id', name: 'destination.show', component: ()=>import('@/views/destinationShow.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
})
export default router;
