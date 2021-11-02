import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Filter from '../pages/Filter.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Profile from '../pages/Profile.vue'
import Movies from '../pages/Movies.vue'
import Movie from '../pages/Movie.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            isPublic: false
        }
    },
    {
        path: '/filter',
        name: 'Filter',
        component: Filter,
        meta: {
            isPublic: false
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            isPublic: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            isPublic: true
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            isPublic: false
        }
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies,
        meta: {
            isPublic: false
        }
    },
    {
        path: '/movies/:id',
        name: 'Movie',
        component: Movie,
        meta: {
            isPublic: false
        }
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router