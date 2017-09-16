import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const manga = {

    actions: {
        addManga: function (context, payload) {
            let manga = {
                "title": payload.title,
                "level": payload.level
            };

            axios.post(`https://hhh-api.herokuapp.com/api/v1/manga_titles`, manga, {
                headers: { Authorization: payload.token }
            }).then( response => {
                console.log(response);
            }).catch(e => {
                console.log(e);
            })
    },
        addEpisode: function (context, payload) {
            let mangaEpisode = {
                "url": payload.url,
                "episode": payload.episode
            };

            axios.post(`https://hhh-api.herokuapp.com/api/v1/manga_titles/${payload.mangaTitleId}/mangas`, mangaEpisode, {
                headers: { Authorization: payload.token}
            }).then(response => {
                console.log(response);
            }).catch(e => { console.log(e)})
        }
    }
};