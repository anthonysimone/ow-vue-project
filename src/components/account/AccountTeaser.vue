<template>
  <div :class="{'account-teaser' : true, ['tier-' + prestigeTier] : true}">
    <div class="account-avatar-wrapper">
      <div class="account-avatar">
        <div class="account-icon">
          <img :src="account.icon" alt="Account icon">
          <div class="mask-top"></div>
          <div class="mask-bottom"></div>
        </div>
        <div class="account-icon-frame">
          <img class="account-level-icon" :src="account.levelIcon" alt="Level icon">
          <img class="account-prestige-icon" :src="account.prestigeIcon" alt="Presitge icon">
        </div>
        <div class="avatar-account-level">{{ account.level }}</div>
      </div>
    </div>
    <div class="account-name">
      <h4>{{ account.name }} <span class="account-level">{{ account.prestige * 100 + account.level }}</span></h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['account'],

  computed: {
    prestigeTier() {
      switch (Math.floor(this.account.prestige / 6)) {
        case (0):
          return 'bronze';
        case (1):
          return 'silver';
        case (2):
          return 'gold';
        case (3):
          return 'plat';
        default:
          return 'none';
      }
    }
  },

  methods: {
    getPrestigeTier() {
      switch (Math.floor(this.account.prestige / 6)) {
        case (0):
          return 'bronze';
        case (1):
          return 'silver';
        case (2):
          return 'gold';
        case (3):
          return 'plat';
        case (4):
          break;
      }
    }
  }


}


</script>

<style>
.account-teaser {
  display: flex;
  align-items: center;
}
.account-name h4 {
  font-weight: 900;
  font-style: italic;
  font-size: 30px;
  letter-spacing: 0.5px;
  margin-left: 10px;
}
.account-name h4 .account-level {
  color: #f99e1a;
  font-size: 0.8em;
}




.account-avatar-wrapper {
  width: 100px;
}
.account-avatar {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  margin-bottom: 19%;
}
.account-icon {
  position: absolute;
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  overflow: hidden;
}
.account-icon-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.account-level-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 130%;
  max-width: none;
}
.account-prestige-icon {
  position: absolute;
  bottom: -19%;
  left: 50%;
  width: 120%;
  max-width: none;
  transform: translate3d(-50%, 0, 0);
}
.avatar-account-level {
  position: absolute;
  bottom: 0;
  left: 50%;
  background: #fff;
  line-height: 1;
  padding: 3px 3px 2px 3px;
  border: 1.5px solid #2c3e50;
  border-radius: 5px;
  transform: translate3d(-50%, -5%, 0);
}
.mask-top,
.mask-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mask-top:before,
.mask-top:after,
.mask-bottom:before,
.mask-bottom:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fff;
}
.mask-top:before {
  bottom: 100%;
  right: 50%;
  transform: rotate(-30deg);
  transform-origin: 100% 100%;
}
.mask-top:after {
  bottom: 100%;
  left: 50%;
  transform: rotate(30deg);
  transform-origin: 0 100%;
}
.mask-bottom:before {
  top: 100%;
  right: 50%;
  transform: rotate(30deg);
  transform-origin: 100% 0;
}
.mask-bottom:after {
  top: 100%;
  left: 50%;
  transform: rotate(-30deg);
  transform-origin: 0 0;
}
</style>