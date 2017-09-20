import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const manga = {

    state: {
        mangas: [],
        mangaEpisodes: []
    },

    getters: {
        mangas: state => state.mangas,
        mangaEpisodes: state => state.mangaEpisodes
    },

    mutations: {
        mangaAdded: function (state, payload) {
            state.mangas.push(payload)
        },
        addMangaEpisodes: function (state, payload) {
            // console.log(payload);
            state.mangaEpisodes.push(payload)
        },
        getManga: function (state, payload) {
            state.mangas = payload
        },
        getMangaEpisodes: function (state, payload) {
            state.mangaEpisodes = payload
        }
    },

    actions: {
        getManga: function (context, payload) {
            // axios.get(`https://hhh-api.herokuapp.com/api/v1/manga_titles`).then(response => {
            axios.get(`http://localhost:3000/api/v1/manga_titles`).then(response => {
                context.commit('getManga', response.data)
            })
        },
        getMangaEpisodes: function (context, payload) {
            axios.get(`http://localhost:3000/api/v1/manga_titles/${payload}/mangas`)
                   .then( response => {
                       context.commit('getMangaEpisodes', response.data)
                   })
        },
        addManga: function (context, payload) {
            let manga = {
                "title": payload.title,
                "manga_type": payload.type,
                "genre": payload.genre
            };

            // axios.post(`https://hhh-api.herokuapp.com/api/v1/manga_titles`, manga, {
            axios.post(`http://localhost:3000/api/v1/manga_titles`, manga, {
                headers: { Authorization: payload.token }
            }).then( response => {
                context.commit('mangaAdded', response.data);
            }).catch(e => {
                console.log(e);
            })
        },
        addEpisode: function (context, payload) {
            let mangaEpisode = {
                "url": payload.url,
                "episode": payload.episode
            };

            // axios.post(`https://hhh-api.herokuapp.com/api/v1/manga_titles/${payload.mangaTitleId}/mangas`, mangaEpisode, {
            axios.post(`http://localhost:3000/api/v1/manga_titles/${payload.mangaTitleId}/mangas`, mangaEpisode, {
                headers: { Authorization: payload.token}
            }).then(response => {
                // console.log(response);
                context.commit('addMangaEpisodes', response.data)
            }).catch(e => { console.log(e)})
        }
    }
};