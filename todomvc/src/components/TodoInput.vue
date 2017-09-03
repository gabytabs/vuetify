<template>
    <div>
        <input class="input is-large" v-model.trim="newTodo" @keyup.enter="addTodo" placeholder="Add New Todo" />
    </div>
</template>

<script>
    import Vuex from 'vuex';
    import { todosRef } from '../store';

    export default {
        data() {
            return {
                newTodo: ''
            }
        },

        computed: {
            getDateToday: function () {
                let dateToday = new Date();
                let getDay = dateToday.getDate();
                let getMonth = dateToday.getMonth();
                let getYear = dateToday.getFullYear();

                return getMonth + '/' + getDay + '/' + getYear;
            }
        },

        methods: {
            addTodo: function() {
                if (this.newTodo.trim()) {
                    todosRef.push({
                        todo: this.newTodo,
                        isCompleted: false,
                        show: true,
                        date: this.getDateToday
                    });
                    this.newTodo = ''
                }
            }
        },

        mounted() {
            this.$store.dispatch('setTodosRef', todosRef);
        }
    }
</script>