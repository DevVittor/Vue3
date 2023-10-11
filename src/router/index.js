import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Inicio",
            component: () => import("../pages/Home.vue"),
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem("Token");
                if (token) {
                    // O token existe, permita o acesso à rota protegida
                    next();
                } else {
                    // O token não existe, redirecione para a página de login
                    next("/acessar"); // Ou qualquer outra rota de login
                }
            },
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
            path: "/exprofile",
            name: "exProfile",
            component: () => import("../components/exemplo.vue"),
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
