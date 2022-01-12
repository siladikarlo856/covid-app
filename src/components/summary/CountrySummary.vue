<template>
  <div
    class="country-summary-item"
    @click="setActiveCountry(countrySummary.ID)"
  >
    <h3>{{ countrySummary.Country }}</h3>
    <div class="country-summary-data-container">
      <p>
        <strong>Total Confirmed:</strong> {{ countrySummary.TotalConfirmed }}
      </p>
      <p><strong>Total Deaths:</strong> {{ countrySummary.TotalDeaths }}</p>
      <p>
        <strong>Total Recovered:</strong> {{ countrySummary.TotalRecovered }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CountrySummary',
  props: ['countrySummary'],
  methods: {
    ...mapActions(['setActiveCountry']),
  },
};
</script>

<style scoped>
.country-summary-item {
  border: 1px solid black;
  width: 40ch;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.country-summary-item:hover {
  cursor: pointer;
  background: whitesmoke;
}

.country-summary-data-container {
  text-align: left;
}
</style>
