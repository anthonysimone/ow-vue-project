<template>
  <div class="accounts">
    <page-header pageTitle="Accounts" subTitle="Add an account to the system"></page-header>
    <div class="container hero-body">
      <div class="columns">
        <div class="column">
          <div class="section">
            <h2 class="title">Add a new account</h2>
            <form @submit.prevent="addAccount">
              <div class="field">
                <label class="label" for="newAccountId">Account ID</label>
                <div class="control">
                  <input type="text" class="input" v-model="newAccount.id" name="newAccountId" @keyup="formUpdated">
                </div>
                <p v-show="accountInvalid" class="help is-danger">An account with with the above username, platform, and region cannot be found. Please double check capitalization and, region, and platform.</p>
              </div>
              <div class="field">
                <label class="label" for="newAccountPlatform">Platform</label>
                <div class="control">
                  <div class="select">
                    <select class="select" v-model="newAccount.platform" name="newAccountPlatform" @change="formUpdated">
                      <option value="psn">Playstation</option>
                      <option value="xbl">XBox</option>
                      <option value="pc">PC</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label" for="newAccountRegion">Region</label>
                <div class="control">
                  <div class="select">
                    <select class="select" v-model="newAccount.region" name="newAccountRegion" @change="formUpdated">
                      <option value="us">US</option>
                      <option value="eu">Europe</option>
                      <option value="asia">Asia</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-primary" :disabled="formIsDisabled">Add Account</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="column">
          <div class="section">
            <h3 class="title">Accounts</h3>
            <ul>
              <li v-for="account in accounts" :key="account.name">
                <account-teaser :account="account" :includeLink="true"></account-teaser>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import accounts from '@/store/accounts';
import Account from '@/models/Account';
import AccountTeaser from '@/components/account/AccountTeaser';
import PageHeader from '@/components/elements/layout/PageHeader';

export default {
  components: {
    AccountTeaser,
    PageHeader
  },
  data() {
    return {
      newAccount: {
        id: '',
        platform: 'psn',
        region: 'us'
      },
      waitingForResponse: false,
      accountInvalid: false,
      accounts: accounts
    }
  },

  computed: {
    formIsDisabled() {
      return this.waitingForResponse || this.accountInvalid;
    }
  },

  methods: {
    addAccount() {
      this.waitingForResponse = true;
      Account.getProfile(this.newAccount.id, this.newAccount.platform, this.newAccount.region)
          .then((response) => {
            if (response.data.hasOwnProperty('error')) {
              // no account found
              this.waitingForResponse = false;
              this.accountInvalid = true;
            } else {
              // account found
              // Add the update date
              response.data.lastUpdated = new Date();
              // Add the region and platform as well for future reference
              response.data.region = this.newAccount.region;
              response.data.platform = this.newAccount.platform;
              this.accounts.push(response.data);
              this.newAccount.id = '';
              this.waitingForResponse = false;
            }
          });
    },

    formUpdated() {
      this.accountInvalid = false;
    }
  }
}
</script>

<style>

</style>  