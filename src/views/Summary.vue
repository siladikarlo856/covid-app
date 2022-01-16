<template>
  <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>

  <div class="summary-container" v-if="!loading">
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

import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'Summary',
  data() {
    return {
      loading: true,
    };
  },
  components: {
    GlobalSummary,
    CountrySummary,
    PulseLoader,
  },
  computed: {
    ...mapGetters(['globalSummary', 'countriesSummary']),
  },
  created() {
    this.$store
      .dispatch('getSummary')
      .then(() => {
        // Data are fetched. Hide loader and display data.
        this.loading = false;
      })
      .catch((error) => {
        // Log error message and show "NotFound" page.
        this.$router.push(`/covid-app/error`);
        console.log('Summary created() getSummary error: ', error);
      });
  },
};
</script>

<style lang="scss" scoped>
.summary-container {
  .global-summary-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeInAnimation ease 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .countries-summary-container {
    .countries-items {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
      justify-items: center;
    }
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    h2 {
      margin-bottom: 2rem;
    }
  }
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
