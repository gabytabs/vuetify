import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import { EventBus } from './main';

Vue.use(Vuex);

export const store = new Vuex.Store({
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
            axios.post(`http://localhost:3000/api/v1/users`,
                {
                    "user": {
                        "email": payload.email,
                        "password": payload.password,
                        "password_conformation": payload.passwordConf
                    }
                })
                .then( () => {
                   axios.post(`http://localhost:3000/user_token`, {
                      "auth": {
                         "email": payload.email,
                         "password": payload.password
                      }
                   })
                   .then( response => {
                       context.commit('loginUser', response.data.jwt)
                   })
                })
        },
        loginUser: function (context, payload) {
            axios.post(`http://localhost:3000/user_token`, {
                "auth": {
                    "email": payload.email,
                    "password": payload.password
                }
            }).then( response => {
                context.commit('loginUser', response.data.jwt);
            })
        },
        addEpisode: function (context, payload) {
            let manga = {
                "url": payload.url,
                "episode": payload.episode
            };

            axios.post(`http://localhost:3000/api/v1/manga_titles/${payload.mangaTitleId}/mangas`, manga, {
               headers: { Authorization: payload.token}
            }).then(response => {
                console.log(response);
            }).catch(e => { console.log(e)})
        }
    }
});