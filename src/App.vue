<template>
  <div id="app">


    <!-- begin header and menu -->
    <section class="hero is-primary is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"> -->
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
     <!--            <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                </a>
                <a class="navbar-item">
                  Documentation
                </a> -->
                <!-- <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span> -->
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Demo Vue App
          </h1>
          <h2 class="subtitle">
            With Lots of Functionality
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <!-- <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <router-link tag="li" to="/" exact>
                <a>Home</a>
              </router-link>
              <router-link tag="li" to="/about">
                <a>About</a>
              </router-link>
              <router-link tag="li" to="/info">
                <a>Info</a>
              </router-link>
            </ul>
          </div>
        </nav>
      </div> -->
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
      accounts: accounts
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
