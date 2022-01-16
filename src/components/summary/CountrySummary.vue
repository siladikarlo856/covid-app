<template>
  <div class="country-summary-item" @click="openCountryPerDay(countrySummary)">
    <h3 class="card-title">{{ countrySummary.Country }}</h3>
    <div class="country-summary-data">
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
export default {
  name: 'CountrySummary',
  props: ['countrySummary'],
  methods: {
    /**
     * Set selected country and open data per day view
     *
     * @param {object}countrySummaryObj   Country object with Country and Slug property
     */
    openCountryPerDay(countrySummaryObj) {
      this.$store.dispatch('setSelectedCountry', countrySummaryObj);
      this.$router.push(
        `/${process.env.VUE_APP_REPO_NAME}/perday/${countrySummaryObj.Slug}`,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.country-summary-item {
  box-sizing: border-box;
  border: 1px solid black;
  width: 30ch;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    cursor: pointer;
    background: whitesmoke;
  }

  .card-title {
    margin-bottom: 0.5rem;
  }

  .country-summary-data {
    text-align: left;
  }
}
</style>
