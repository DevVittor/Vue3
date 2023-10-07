import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Inicio",
            component: () => import("../pages/Home.vue"),
        },
        {
            path: "/:id",
            name: "box",
            component: () => import("../components/Box.vue"),
        },
        {
            path: "/perfil",
            name: "perfil",
            component: () => import("../components/Profile.vue"),
        },
        {
            path: "/cadastrar",
            name: "Cadastrar",
            component: () => import("../pages/Cadastrar.vue"),
        },
        {
            path: "/acessar",
            name: "Acessar",
            component: () => import("../pages/Acessar.vue"),
        },
        {
            path: "/model",
            name: "Model",
            component: () => import("../pages/Model.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "error",
            component: () => import("../pages/Error404.vue"),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});
export default router;
