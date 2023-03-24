import {createRouter, createWebHistory} from "vue-router";
import Home from "../../views/Home.vue";


const routes = [
    {path: "/", name: 'home', component: Home},
    {path: "/about", name: 'about', component: () => import('../../views/About.vue')},
    {path: "/archives", name: 'archives', component: () => import('../../views/Archives.vue')},
    {path: "/tags", name: 'tags', component: () => import('../../views/Tags.vue')},
    {
        path: "/tags/:tagId",
        name: "TagArticles",
        component: () => import("../../views/TagArticles.vue"),
        props:true
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
