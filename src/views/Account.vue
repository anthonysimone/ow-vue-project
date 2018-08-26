<template>
  <div class="account">
    <page-header :pageTitle="this.$route.params.id" subTitle="Your account details"></page-header>
    <div class="container hero-body" v-if="account">
      <div class="columns">
        <div class="column">
          <account-teaser :account="account" :includeLink="false"></account-teaser>
          <div class="update-profile help">Last updated {{ lastUpdateInWords }}.<br><button class="button is-primary is-small" @click="updateAccount" v-text="updateButtonText" :disabled="waitingForResponse"></button></div>
          <div class="box quickplay">
            <h3 class="title">Quick Play</h3>
            <ul class="columns">
              <li class="column"><stat-item stat-label="Won" :stat-value="account.quickPlayStats.games.won"></stat-item></li>
              <li class="column"><stat-item stat-label="Cards" :stat-value="account.quickPlayStats.awards.cards"></stat-item></li>
              <li class="column"><stat-item stat-label="Gold" :stat-value="account.quickPlayStats.awards.medalsGold"></stat-item></li>
              <li class="column"><stat-item stat-label="Silver" :stat-value="account.quickPlayStats.awards.medalsSilver"></stat-item></li>
              <li class="column"><stat-item stat-label="Bronze" :stat-value="account.quickPlayStats.awards.medalsBronze"></stat-item></li>
            </ul>
          </div>
        </div>
        <div class="column">
          <div class="box comp">
            <h3 class="title">Competitive (Current Season)</h3>
            <div v-if="account.rating">
              <h4 class="title is-4">Rank</h4>
              <p class="rating-description">You've reached {{ account.ratingName }}!</p>
              <account-rating :rating-value="account.rating" :rating-name="account.ratingName" :rating-icon="account.ratingIcon"></account-rating>
              <h4 class="title is-4">Games</h4>
              <ul class="columns">
                <li class="column">
                  <stat-item stat-label="Won" :stat-value="account.competitiveStats.games.won"></stat-item>
                </li>
                <li class="column">
                  <stat-item stat-label="Played" :stat-value="account.competitiveStats.games.played"></stat-item>
                <li class="column">
                  <stat-item stat-label="Winrate" :stat-value="Math.floor(account.competitiveStats.games.won/account.competitiveStats.games.played*100) + '%'"></stat-item></li>
              </ul>
              <h4 class="title is-4">Awards</h4>
              <ul class="columns">
                <li class="column"><stat-item stat-label="Cards" :stat-value="account.competitiveStats.awards.cards"></stat-item></li>
                <li class="column"><stat-item stat-label="Gold" :stat-value="account.competitiveStats.awards.medalsGold"></stat-item></li>
                <li class="column"><stat-item stat-label="Silver" :stat-value="account.competitiveStats.awards.medalsSilver"></stat-item></li>
                <li class="column"><stat-item stat-label="Bronze" :stat-value="account.competitiveStats.awards.medalsBronze"></stat-item></li>
              </ul>
              <div class="columns">
                <div class="column">
                  <pie-chart :chart-data="[{ label: 'Gold', color: '#d2a145', value: account.competitiveStats.awards.medalsGold },{ label: 'Silver', color: '#a7aCaf', value: account.competitiveStats.awards.medalsSilver },{ label: 'Bronze', color: '#874e47', value: account.competitiveStats.awards.medalsBronze }]"></pie-chart>
                </div>
              </div>
            </div>
            <div v-else>
              <p>You haven't played enough competitive games yet this season to have a rating. Play more games!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container hero-body" v-else>
      <div class="columns">
        <div class="column">
          <div>
            No account has been found with this name. If you would like to add this account to the system, please visit the <router-link to="/accounts">account page</router-link>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { distanceInWords } from 'date-fns';
import Account from '@/models/Account';
import accounts from '@/store/accounts';
import PageHeader from '@/components/elements/layout/PageHeader';
import StatItem from '@/components/elements/simple/StatItem';
import PieChart from '@/components/d3/PieChart';
import AccountTeaser from '@/components/account/AccountTeaser';
import AccountRating from '@/components/account/AccountRating';

export default {
  components: {
    AccountTeaser,
    PageHeader,
    AccountRating,
    StatItem,
    PieChart
  },

  methods: {
    updateAccount() {
      // query api, get updated stats, and merge objects
      this.errorFindingAccount = false;
      this.waitingForResponse = true;
      Account.getProfile(this.account.name, this.account.platform, this.account.region)
          .then((response) => {
            if (response.data.hasOwnProperty('error')) {
              // error finding account
              this.errorFindingAccount = true;
              this.waitingForResponse = false;
            } else {
              // account found, merge objects
              Object.assign(this.account, response.data);
              this.account.lastUpdated = new Date();
              this.waitingForResponse = false;
            }
          });
    }
  },

  computed: {
    lastUpdateInWords() {
      return distanceInWords(new Date(), this.account.lastUpdated, {addSuffix: true});
    },
    updateButtonText() {
      return this.waitingForResponse ? 'Waiting...' : 'Update Profile Stats';
    }
  },

  data() {
    return {
      id: this.$route.params.id,
      account: null,
      waitingForResponse: false,
    }
  },

  mounted() {
    this.account = accounts.find(obj => obj.name === this.$route.params.id);
  }
}
</script>

<style lang="scss">
.rating-description {
  font-size: 18px;
  font-weight: 600;
}
.quickplay {
  margin-top: 30px;
}
</style>  