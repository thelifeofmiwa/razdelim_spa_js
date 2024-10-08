import { createRouter, createWebHistory } from "vue-router";
import StartPage from "../components/StartPage.vue";
import PersonsPage from "../components/PersonsPage.vue";
import ProductsPage from "../components/ProductsPage.vue";

const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/persons',
        component: PersonsPage
    },
    {
        path: '/products',
        component: ProductsPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;