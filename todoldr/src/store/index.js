import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { config } from './firebase_config'

const db = firebase.initializeApp(config).database()
export const todosRef = db.ref('todos')

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: []
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    ...firebaseMutations
  },
  actions: {
    setTodoRef: firebaseAction(({bindFirebaseRef}, ref) => {
      bindFirebaseRef('todos', ref)
    })
  }
})
