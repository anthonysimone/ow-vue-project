<template>
  <div class="stat">
    <p class="stat-label">{{ statLabel }}</p>
    <p class="stat-value">{{ statValue }}</p>
  </div>
</template>

<script>
export default {
  props: {
    statLabel: String,
    statValue: [String, Number]
  }
}
</script>

<style lang="scss">
.stat {
  text-align: center;
  .stat-label {
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
  }
  .stat-value {
    margin-top: 5px;
    font-size: 18px;
    font-weight: 900;
    line-height: 1;
    font-style: italic;
    color: $ow-purple;
  }
}
</style>