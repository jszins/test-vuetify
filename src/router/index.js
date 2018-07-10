import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path:'/users',
            component: User,
            name: 'user'
        }
    ]
})

export default router