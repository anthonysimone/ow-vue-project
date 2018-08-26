<template>
  <div class="home">
    <page-header pageTitle="Home" subTitle="Test"></page-header>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Homepage</h1>
        <h2 class="subtitle">Vue Router Demo</h2>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/elements/layout/PageHeader';

export default {
  components: {
    PageHeader
  }
}
</script>
