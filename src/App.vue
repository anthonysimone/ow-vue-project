<template>
  <div id="app">


    <!-- begin header and menu -->
    <section class="hero is-primary is-small">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                Some App
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <router-link class="navbar-item" to="/" exact><a>Home</a></router-link>
                <router-link class="navbar-item" to="/about">About</router-link>
                <router-link class="navbar-item" to="/accounts">Accounts</router-link>
                <router-link class="navbar-item" to="/heroes">Heroes</router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <!-- end header and menu -->

    <router-view/>
  </div>
</template>

<script>
import accounts from '@/store/accounts';

export default {
  data() {
    return {
      accounts
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
}
</style>
