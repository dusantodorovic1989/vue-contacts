import Vue from 'vue';
import Router from 'vue-router'

import ContactList from './components/ContactsList'
import Login from './components/Auth/Login'
Vue.use(Router)

const routes = [
    {
        name:'home',
        path :'/',
        component: ContactList
    },
    {   
        name:'login',
        path :'/login',
        component: Login,
        meta:{
            guest:true
        }
    }
    // ako one na nedefinisanu rutu
    // {
    //     path:'*',
    //     name:'not-found',
    //     component:ContactList
    // }
];

const router = new Router({
    mode:'history',
    routes
});

router.beforeEach((to,from,next)=>{
    const isAuthenticated = !!localStorage.getItem('token');
    if(isAuthenticated && to.meta.guest){
        return next({name: 'home'});

    }
    if(!isAuthenticated && !to.meta.guest){
        return next({name: 'login'});
    }
    return next();
})
export default router;