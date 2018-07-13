import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import ActivityIndex from '@/components/Activities/ActivityIndex'
import Activity from '@/components/Activities/Activity'
import ActivityDetails from '@/components/Activities/ActivityDetails'

import AdminIndex from '@/components/Admins/AdminIndex'
import SignIn from '@/components/Admins/SignIn'

import RegionIndex from '@/components/Regions/RegionIndex'
import Region from '@/components/Regions/Region'

import SchoolIndex from '@/components/Schools/SchoolIndex'
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
                    path:'sign-in',
                    component: SignIn,
                    name:'signIn'
                }
            ]
        },
        {
            path:'/schools',
            component: SchoolIndex,
            children: [
                {
                    path:'',
                    component: School,
                    name: 'school'
                }
            ]
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
                    path:':id',
                    props: true,
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