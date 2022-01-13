<template>
  <div class="home">
    <header>
      <img
        src="https://www.un.org/sites/un2.un.org/files/covid-19.svg"
        alt="Covid Logo"
        class="covid-logo"
      />
      <h1>COVID-19 app</h1>
    </header>

    <div class="global-summary-container">
      <GlobalSummary :globalSummary="globalSummary" />
    </div>

    <div class="countries-summary-container">
      <h2>Countries Summary</h2>
      <div class="countries-items">
        <CountrySummary
          v-for="countrySummary in countriesSummary"
          :key="countrySummary.ID"
          :countrySummary="countrySummary"
        />
      </div>
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
    ...mapGetters(['globalSummary', 'countriesSummary']),
  },
  created() {
    this.$store.dispatch('getSummary');
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;

  .covid-logo {
    width: 80px;
    filter: invert(51%) sepia(50%) saturate(471%) hue-rotate(70deg)
      brightness(91%) contrast(84%);
    margin: 10px;
  }
}

.global-summary-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countries-items {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
}
</style>
