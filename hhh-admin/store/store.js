import Vue from 'vue';
import Vuex from 'vuex';
import { EventBus } from '../src/main';

import { user } from './modules/user';
import { manga } from './modules/manga';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        manga
    }
});