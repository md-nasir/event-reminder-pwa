import {createApp} from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import routes from './router';
import * as VueRouter from 'vue-router';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
})
import {Modules} from './store';

const store = new Vuex.Store({modules: Modules});

createApp(App).use(store).use(router).mount('#app');
