<template>
  <div class="home">
    <h1>COVID-19 app</h1>
    <img alt="Vue logo" src="../assets/covid_logo.png" style="width: 200px" />
    <GlobalSummary :globalSummary="globalSummary" />
    <div class="country-summary-container">
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

<style scoped></style>
