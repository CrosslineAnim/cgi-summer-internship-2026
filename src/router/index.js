import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../components/HomeView.vue";
import FiltersView from "../components/view/FiltersView.vue";
import TableMapView from "../components/view/TableMapView.vue";
import ErrorView from "../components/view/ErrorView.vue";

const routes = [
    {
        path: '/',                      // this is the opening/home page
        name: 'Home',
        component:HomeView
    },

    {
        path: '/',                      // this is the opening/home page
        name: 'Filters',
        component:FiltersView
    },

    {
        path: '/',                      // this is the opening/home page
        name: 'TableMap',
        component:TableMapView
    },
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
    }
    // Optional extra routes later
    // { path: '/tables', component: TableView },
]

const router = createRouter({
    history: createWebHistory(),      // normal browser history (clean URLs)
    routes
})

export default router
