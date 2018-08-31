<template>
  <div class="account-rating-display">
    <div class="rating-icon">
      <img :src="this.ratingIcon" alt="Rating icon">
    </div>
    <div class="rating-content">
      <p class="rating">{{ ratingValue }}<span class="sr">SR</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratingValue: String,
    ratingName: String,
    ratingIcon: String
  }
}
</script>

<style lang="scss">
.account-rating-display {
  position: relative;
  display: flex;
  align-items: center;
  .rating-icon {
    flex: 0 0 90px;
  }
  .rating-content {
    padding-left: 10px;
  }
  .rating {
    position: relative;
    display: inline-block;
    color: $body-font-color;
    font-size: 26px;
    font-weight: 900;
    line-height: 1;
    font-style: italic;
    .sr {
      position: absolute;
      top: 0;
      left: 100%;
      font-size: 0.8em;
      font-weight: 900;
      margin-left: 4px;
      color: #ce34da;
    }
  }
}
</style>