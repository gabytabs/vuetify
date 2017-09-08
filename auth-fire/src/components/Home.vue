<template>
  <section class="box login-container">
    <p class="control has-icon">
      <input class="input"
             v-model="emailInput"
             type="email"
             placeholder="Email">
      <i class="fa fa-envelope"></i>
    </p>
    <p class="control has-icon">
      <input class="input"
             v-model="passwordInput"
             type="password"
             placeholder="Password">
      <i class="fa fa-lock"></i>
    </p>
    <p class="control">
      <button @click="logIn({email: emailInput, password: passwordInput})"
              class="button is-success">
        Login
      </button>
    </p>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      emailInput: '',
      passwordInput: ''
    }
  },
  methods: {
    ...mapActions({
      logIn: 'logIn'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-container{
    margin-top: 100px;
  }
</style>
