import Vue from 'vue';
import Vuex from 'vuex';

import { firebaseMutations, firebaseAction } from 'vuexfire';
import firebase from 'firebase';

Vue.use(Vuex);

export const db = firebase.initializeApp({

}).database();

export const todosRef = db.ref('todos');

export const store = new Vuex.Store({

    strict: true,

    state: {
        todos: [], // Will be bound as an array
        user: null // Will be bound as an object
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