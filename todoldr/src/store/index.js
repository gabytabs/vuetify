import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import { config } from './firebase_config'

const db = firebase.initializeApp(config).database()

export const herTodosRef = db.ref('herTodos')
export const hisTodosRef = db.ref('hisTodos')

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    herTodos: [],
    hisTodos: [],
    herCompletedTasks: [],
    hisCompletedTasks: []
  },
  getters: {
    herTodos: state => state.herTodos,
    hisTodos: state => state.hisTodos,
    herCompletedTask: state => state.herCompletedTasks,
    hisCompletedTask: state => state.hisCompletedTasks
  },
  mutations: {
    ...firebaseMutations,
    addHerTaskToComplete: function (state, payload) {
      state.herCompletedTasks = payload
    },
    addHisTaskToComplete: function (state, payload) {
      state.hisCompletedTasks = payload
    }
  },
  actions: {
    setHerTodoRef: firebaseAction(({bindFirebaseRef}, ref) => {
      bindFirebaseRef('herTodos', ref)
    }),
    setHisTodoRef: firebaseAction(({bindFirebaseRef}, ref) => {
      bindFirebaseRef('hisTodos', ref)
    }),
    pushToCompleteHerTasks: function (context, payload) {
      context.commit('addHerTaskToComplete', payload)
    },
    pushToCompleteHisTasks: function (context, payload) {
      context.commit('addHisTaskToComplete', payload)
    }
  }
})
