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
                <span class="navbar-item">
                  <button class="button is-primary is-inverted" @click="clearState">Clear Data</button>
                </span>
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
export default {
  data() {
    return {
      accounts: this.$store.state.accounts
    }
  },

  methods: {
    clearState() {
      this.$store.commit('clearState');
      alert('removing storage');
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
