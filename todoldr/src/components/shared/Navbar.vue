<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <!--<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">-->
          <h1 class="subtitle navbar-brand-title"> TodoLDR </h1>
        </a>

        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item item-in-navbar" href="#">
            Sign In
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default { }
</script>

<style scoped>
  .navbar-brand-title {
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
</style>
