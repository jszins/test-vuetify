import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import User from '@/components/Users/User'

import School from '@/components/Schools/School'

import RegionIndex from '@/components/Regions/RegionIndex'
import CreateRegion from '@/components/Regions/CreateRegion'
import Region from '@/components/Regions/Region'

import ActivityIndex from '@/components/Activities/ActivityIndex'
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
            path:'/regions',
            component: RegionIndex,
            children: [
                        
                {
                    path:'',
                    component: Region,
                    name:'region'
                },
                {
                    path:'create',
                    component: CreateRegion,
                    name:'createRegion'
                }
            ]
        },
        {
            path:'/activities',
            component: ActivityIndex,
            children: [
                {
                    path: '',
                    component: Activity,
                    name: 'activity',
                },
                {
                    path:'create',
                    component: CreateActivity,
                    name: 'createActivity'
                },
                {
                    path:':id',
                    component: ActivityDetails,
                    name:'activityDetails'
                },
            ]
        },
        {
            path: '**',
            redirect: '/'
        }
    ]
})

export default router