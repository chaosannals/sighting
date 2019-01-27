import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/sighting/',
    routes: [{
        path: '/index.html',
        name: 'index',
        component: () => import('./pages/Index.vue'),
        meta: {
            title: 'Sighting',
        },
    }, {
        path: '/login.html',
        name: 'login',
        component: () => import('./pages/Login.vue'),
        meta: {
            title: 'Login Sighting',
        },
    }],
});
