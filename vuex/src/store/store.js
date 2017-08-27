import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },

    //Access state in different components
    //Think of this as a state. I may mainly use just like a computed property.
    getters: {
        doubleCounter (state) {
            //complex calculations are here!
            return state.counter * 2;
        },
        stringCounter (state) {
            return state.counter + ' clicks';
        }
    },

    //Change Props from Store
    mutations: {
        increment (state, payload) {
            state.counter += payload;
        },
        decrement (state, payload) {
            state.counter -= payload;
        }
    },

    //Events trigger to activate Mutations
    actions: {
        //Payload is the arguements inside of the function on the triggered events
        increment: (context, payload) => {
            context.commit('increment', payload);
        },
        decrement: (context, payload) => {
            context.commit('decrement', payload);
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout( () => {
                commit('increment', payload.by);
            }, payload.duration );
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout( () => {
                console.log('it will happen in ' + payload.duration + ' millisecs');
                commit('decrement', payload.by);
            }, payload.duration );
        }
    }
});