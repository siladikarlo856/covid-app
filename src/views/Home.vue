<template>
  <div class="home">
    <header>
      <img alt="Vue logo" src="../assets/covid_logo.png" style="width: 200px" />

      <h1>COVID-19 app</h1>
    </header>
    <div class="global-summary-container">
      <GlobalSummary :globalSummary="globalSummary" />
    </div>
    <div class="country-summary-container">
      <h2>Countries Summary</h2>
      <CountrySummary
        v-for="countrySummary in countriesSummary"
        :key="countrySummary.ID"
        :countrySummary="countrySummary"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

// @ is an alias to /src
import GlobalSummary from '@/components/summary/GlobalSummary.vue';
import CountrySummary from '@/components/summary/CountrySummary.vue';

export default {
  name: 'Home',
  components: {
    GlobalSummary,
    CountrySummary,
  },
  computed: {
    ...mapGetters(['globalSummary', 'countriesSummary', 'countriesPerDay']),
  },
  created() {
    this.$store.dispatch('getSummary');
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.country-summary-container,
.global-summary-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
