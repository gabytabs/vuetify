import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from 'firebase'

Vue.use(Vuex)

const db = firebase.initializeApp({
  apiKey: 'AIzaSyBII4YuMsEIqBSSN6WNqaVmmzeLHsvWS-g',
  authDomain: 'vue-get-committed.firebaseapp.com',
  databaseURL: 'https://vue-get-committed.firebaseio.com',
  projectId: 'vue-get-committed',
  storageBucket: 'vue-get-committed.appspot.com',
  messagingSenderId: '447622295395'
}).database()

export const reposRef = db.ref('repos')

export const store = new Vuex.Store({
  strict: true,
  state: {
    repos: []
  },
  getters: {
    repos: state => state.repos
  },
  mutations: firebaseMutations,
  actions: {
    setReposRef: firebaseAction(({ bindFirebaseRef }, ref) => {
      bindFirebaseRef('repos', ref)
    })
  }
})
