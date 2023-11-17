import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("../pages/Home.vue"),
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem("Token");
            if (token) {
                // O token existe, permita o acesso à rota protegida
                next();
            } else {
                // O token não existe, redirecione para a página de login
                next("/restrita"); // Ou qualquer outra rota de login
            }
        },
    },
    {
        name: "Profile",
        path: "/profile/:id",
        component: () => import("../pages/exemplo.vue"),
    },
    {
        name: "Cadastrar",
        path: "/cadastrar",
        component: () => import("../pages/Cadastrar.vue"),
    },
    {
        name: "Acessar",
        path: "/acessar",
        component: () => import("../pages/Acessar.vue"),
    },
    {
        name: "Restrita",
        path: "/restrita",
        component: () => import("../pages/Restrita.vue")
    },
    {
        name: "Error404",
        path: "/:pathMatch(.*)*",
        component: () => import("../pages/Error404.vue"),
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
/*const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "Inicio",
            path: "/",
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
            name: "Profile",
            path: "/:id",
            component: () => import("../components/exemplo.vue"),
        },
        {
            name: "perfil",
            path: "/perfil",
            component: () => import("../components/Profile.vue"),
        },
        {
            name: "exProfile",
            path: "/exprofile",
            component: () => import("../components/exemplo.vue"),
        },
        {
            path: "/cadastrar",
            name: "Cadastrar",
            component: () => import("../pages/Cadastrar.vue"),
        },
        {
            name: "Acessar",
            path: "/acessar",
            component: () => import("../pages/Acessar.vue"),
        },
        {
            name: "Model",
            path: "/model",
            component: () => import("../pages/Model.vue"),
        },
        {
            name: "Envio",
            path: "/envio",
            component: () => import("../pages/Envio.vue"),
        },
        {
            name: "Error",
            path: "/:pathMatch(.*)*",
            component: () => import("../components/Error404.vue"),
        },
        {
            name: "Register",
            path: "/register",
            component: () => import('../pages/Register.vue')
        }

    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

export default router;*/
