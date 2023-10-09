import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/LandingPage.vue"
import About from "./../components/About.vue"
import Signup from "./../components/Signup.vue"
import Login from "./../components/Login.vue"
import Register from "./../components/Register.vue"
import Students from "./../components/Students.vue"
import Lecturers from "./../components/Lecturers.vue"




const routes =[
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/Signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },
    { 
        path: '/Register',
        name: 'Register',
        component: Register,
    },
    { 
        path: '/Students',
        name: 'Students',
        component: Students,
    },
    { 
        path: '/Lecturers',
        name: 'Lecturers',
        component: Lecturers,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router

