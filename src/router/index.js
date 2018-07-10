import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import User from '@/components/Users/User'

import School from '@/components/Schools/School'

import Region from '@/components/Regions/Region'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path:'/',
            component: Home,
            name:'home'
        },
        {
            path:'/users',
            component: User,
            name: 'user'
        },
        {
            path:'/schools',
            component: School,
            name:'school'
        },
        {
            path:'/regions',
            component: Region,
            name:'region'
        }
    ]
})

export default router