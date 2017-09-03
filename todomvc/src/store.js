import Vue from 'vue';
import Vuex from 'vuex';

import { firebaseMutations, firebaseAction } from 'vuexfire';
import firebase from 'firebase';

Vue.use(Vuex);

const db = firebase.initializeApp({
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId
}).database();

export const todosRef = db.ref('todos');

export const store = new Vuex.Store({

    strict: true,

    state: {
        todos: []
    },

    mutations: firebaseMutations,

    getters: {
        todos: state => state.todos
    },

    actions: {
        setTodosRef: firebaseAction( ( { bindFirebaseRef }, ref) => {
            bindFirebaseRef('todos', ref)
        })
    }
});