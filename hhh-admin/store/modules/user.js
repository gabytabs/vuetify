import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const user = {
    state: {
        userToken: ""
    },

    getters: {
        userToken: state => state.userToken
    },

    mutations: {
        loginUser: function (state, payload) {
            state.userToken = payload;
        }
    },

    actions: {
        createUser: function (context, payload) {
            axios.post(`https://hhh-api.herokuapp.com/api/v1/users`,
                {
                    "user": {
                        "email": payload.email,
                        "password": payload.password,
                        "password_conformation": payload.passwordConf
                    }
                })
                .then(() => {
                    axios.post(`https://hhh-api.herokuapp.com/user_token`, {
                        "auth": {
                            "email": payload.email,
                            "password": payload.password
                        }
                    })
                        .then(response => {
                            context.commit('loginUser', response.data.jwt)
                        })
                })
        },
        loginUser: function (context, payload) {
            axios.post(`https://hhh-api.herokuapp.com/user_token`, {
                "auth": {
                    "email": payload.email,
                    "password": payload.password
                }
            }).then(response => {
                context.commit('loginUser', response.data.jwt);
            })
        }
    }
};