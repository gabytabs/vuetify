import Home from './components/Home.vue';
import LoginUser from './components/LoginUser.vue';
import RegisterUser from './components/RegisterUser.vue';

import AdminConsole from './components/authenticated/ConsoleAdmin.vue';
import Mangas from './components/authenticated/Mangas.vue';
import MangaEpisodes from './components/authenticated/MangaEpisodes.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/yoloswagmaster420blazeit', component: RegisterUser },
    { path: '/login', name: 'login', component: LoginUser },

    { path: '/auth', component: AdminConsole, children: [
        { path: '', name: 'manga-title', component: Mangas },
        { path: ':title/:id', name: 'manga-episode', component: MangaEpisodes }
    ]}
];