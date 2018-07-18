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
import SchoolDetails from "@/components/Schools/SchoolDetails";

import Search from '@/components/Search/Search'

import StaffIndex from '@/components/Staff/StaffIndex'
import Staff from '@/components/Staff/Staff'

import TournamentIndex from '@/components/Tournaments/TournamentIndex'
import Tournament from '@/components/Tournaments/Tournament'



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
                    name: 'schools'
                },
                {
                    path:':id',
                    component: SchoolDetails,
                    name: 'schoolDetails'
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
            path:'/staff',
            component: StaffIndex,
            children: [
                {
                    path:'',
                    component: Staff,
                    name:'staff'
                }
            ]

        },
        {
            path:'/tournaments',
            component: TournamentIndex,
            children: [
                {
                    path:'',
                    component: Tournament,
                    name:'tournaments'
                }
            ]
        },
        {
            path: '**',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next();
  })

export default router