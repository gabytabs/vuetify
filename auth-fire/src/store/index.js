import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from 'firebase'

Vue.use(Vuex, axios, VueAxios)

const db = firebase.initializeApp({

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
        .catch(error => {
          console.log(error.message)
        })
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user)
        } else {
          console.log('the user is not logged in')
        }
      })
    }
  }
})
