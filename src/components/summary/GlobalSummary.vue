<template>
  <div class="global-summary-item">
    <h2>Global Summary</h2>
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
<style scoped>
.global-summary-item {
  border: 1px solid black;
  width: 40ch;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #50974e;
  color: white;
}

.global-summary-data {
  text-align: left;
}
</style>
