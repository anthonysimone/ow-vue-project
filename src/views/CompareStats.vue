<template>
  <div class="compare-stats">
    <page-header pageTitle="Compare Stats"></page-header>
    <div class="container hero-body">
      <div class="columns">
        <div class="column">
          <h3 class="title">Choose accounts to compare.</h3>
        </div>
        <div class="column">
          <h3>Choose the stats to compare</h3>
          <form>
            <fieldset class="fieldset">
              <legend for="statType">Stat Type</legend>
              <div class="pill-radios">
                <label class="radio" for="stat_general"><input type="radio" name="stat_type" id="stat_general">General</label>
                <label class="radio" for="stat_hero"><input type="radio" name="stat_type" id="stat_hero">Hero</label>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/elements/layout/PageHeader';

export default {
  components: {
    PageHeader
  },
  data() {
    return {
      accounts: this.$store.state.accounts,
      activeAccounts: []
    }
  }
}
</script>