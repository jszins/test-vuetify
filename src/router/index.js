import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import ActivityIndex from '@/components/Activities/ActivityIndex'
import Activity from '@/components/Activities/Activity'
import CreateActivity from '@/components/Activities/CreateActivity'
import ActivityDetails from '@/components/Activities/ActivityDetails'

import AdminIndex from '@/components/Admins/AdminIndex'
import Admin from '@/components/Admins/Admin'

import RegionIndex from '@/components/Regions/RegionIndex'
import CreateRegion from '@/components/Regions/CreateRegion'
import Region from '@/components/Regions/Region'

import School from '@/components/Schools/School'

import Search from '@/components/Search/Search'



Vue.use(Router)

let router = new Router({
    routes: [
        {
            path:'/',
            component: Home,
            name:'home'
        },
        {
            path:'/admins',
            component: AdminIndex,
            children: [
                {
                    path:'',
                    component: Admin,
                    name:'admin'
                }
            ]
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
            path:'/search',
            component: Search,
            name:'search'
        },
        {
            path: '**',
            redirect: '/'
        }
    ]
})

export default router