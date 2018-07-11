import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import User from '@/components/Users/User'

import School from '@/components/Schools/School'

import CreateRegion from '@/components/Regions/CreateRegion'
import Region from '@/components/Regions/Region'

import Activity from '@/components/Activities/Activity'
import CreateActivity from '@/components/Activities/CreateActivity'
import ActivityDetails from '@/components/Activities/ActivityDetails'

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
            path:'/regions/create',
            component: CreateRegion,
            name:'createRegion'
        },
        {
            path:'/regions',
            component: Region,
            name:'region'
        },
        {
            path:'/activities/create',
            component: CreateActivity,
            name: 'createActivity'
        },
        {
            path:'/activities/:id',
            component: ActivityDetails,
            name:'activityDetails'
        },
        {
            path: '/activities',
            component: Activity,
            name: 'activity',
        },
        {
            path: '**',
            redirect: '/'
        }
    ]
})

export default router