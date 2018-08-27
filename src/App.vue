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
                  <confirmation-modal @confirmationSuccess="clearState" dialog-title="Warning!" dialog-body="You are about to delete all data you are currently tracking. You cannot undo this. Do you want to continue?"></confirmation-modal>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <!-- end header and menu -->

    <router-view/>

    <v-dialog></v-dialog>
  </div>
</template>

<script>
import ConfirmationModal from '@/components/elements/functional/ConfirmationModal';

export default {
  components: {
    ConfirmationModal
  },
  data() {
    return {
      accounts: this.$store.state.accounts
    }
  },

  methods: {
    clearState() {
      this.$store.commit('clearState');
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
