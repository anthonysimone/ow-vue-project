<template>
  <div class="heroes">
    <page-header pageTitle="Heroes" subTitle="Select Your Champion"></page-header>
    <div class="container hero-body">
      <div class="message" v-for="hero in heroes" :key="hero.name">
        <div class="message-header">{{ hero.name }}</div>
        <div class="message-body">{{ hero.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Hero from '@/models/Hero';
import PageHeader from '@/components/elements/layout/PageHeader';

export default {
  name: 'heroes',
  components: {
    PageHeader
  },
  data() {
    return {
      heroes: [],
      selectedCategory: 'all'
    }
  },

  created() {
    // Using the hero class
    Hero.all()
        .then(({data}) => this.heroes = data.data);

    // Inline ajax call would look like the following
    // axios.get('https://overwatch-api.net/api/v1/hero')
    //     .then(({data}) => this.heroes = data.data);

  }
}
</script>