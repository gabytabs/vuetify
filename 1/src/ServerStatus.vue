<template>
    <div>
        <p>
            The message from heaven: {{ msgs }}
        </p>
        <button @click="changeMessage">Change the Message</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                msgs: "Hello from Home Component!"
            }
        },
        methods: {
            changeMessage () {
                this.msgs = 'Too much yoloswag for me dawg!';
            }
        }
    }
</script>