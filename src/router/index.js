import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:()=>import('../pages/Home.vue')
        },
        {
            path:'/:id',
            name:'profile',
            component:()=>import('../components/Profile.vue')
        },
        {
            path:'/perfil',
            name:'perfil',
            component:()=>import('../components/Profile.vue')
        },
        {
            path:'/Register',
            name:'Register',
            component:()=>import('../pages/Create.vue')
        },
        {
            path:'/acessar',
            name:'Acessar',
            component:()=>import('../pages/Acessar.vue')
        },
        {
            path:'/box',
            name:'Box',
            component:()=>import('../components/Box.vue')
        }

    ]
})
export default router;