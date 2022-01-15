<template>
  <div class="global-summary-item">
    <h2 class="card-title">Global Summary</h2>
    <div class="global-summary-data">
      <p>
        <strong>Total Confirmed:</strong>
        {{ globalSummary.TotalConfirmed }}
      </p>
      <p><strong>Total Deaths:</strong> {{ globalSummary.TotalDeaths }}</p>
      <p>
        <strong>Total Recovered:</strong>
        {{ globalSummary.TotalRecovered }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalSummary',
  props: ['globalSummary'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.global-summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #50974e;
  color: white;
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  .card-title {
    margin-bottom: 0.5rem;
  }

  .global-summary-data {
    text-align: left;
  }
}
</style>
