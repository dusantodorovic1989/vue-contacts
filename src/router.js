import Vue from 'vue';
import Router from 'vue-router'

import ContactList from './components/ContactsList'

Vue.use(Router)

const routes = [
    {
    path :'/',
    component: ContactList
    }
]

const router = new Router({
    routes
});

export default router;