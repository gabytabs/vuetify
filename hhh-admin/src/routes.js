import Home from './components/Home.vue';
import LoginUser from './components/LoginUser.vue';
import RegisterUser from './components/RegisterUser.vue';
import AdminConsole from './components/ConsoleAdmin.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/yoloswagmaster420blazeit', component: RegisterUser },
    { path: '/login', name: 'login', component: LoginUser },
    { path: '/auth/:id', name: 'auth', component: AdminConsole }
];