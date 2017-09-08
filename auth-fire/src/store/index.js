import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from 'firebase'

Vue.use(Vuex, axios, VueAxios)

const db = firebase.initializeApp({
  apiKey: 'AIzaSyA2ydRYtNfe-EjubA84gl6DU73zq5pJv5M',
  authDomain: 'vue-f-c5a38.firebaseapp.com',
  databaseURL: 'https://vue-f-c5a38.firebaseio.com',
  projectId: 'vue-f-c5a38',
  storageBucket: 'vue-f-c5a38.appspot.com',
  messagingSenderId: '771751348724'
}).database()

export const todosRef = db.ref('todos')

export const store = new Vuex.Store({

  strict: true,

  state: {
    todos: [], // Will be bound as an array
    user: null // Will be bound as an object
  },

  mutations: {
    ...firebaseMutations
  },

  getters: {
    todos: state => state.todos
  },

  actions: {
    setTodosRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('todos', ref)
    }),
    logIn: function (context, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
