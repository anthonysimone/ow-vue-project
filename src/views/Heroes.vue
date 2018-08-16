<template>
  <div class="heroes">
    <div class="container">
      <div class="message" v-for="hero in heroes">
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

export default {
  name: 'heroes',
  components: {},
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