<template>
  <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
  <div class="container" v-bind:class="{ active: isActive }">
    <h2>
      Selected country: <span>{{ activeCountry.Country }}</span>
    </h2>
    <div class="filter-container">
      <strong>Filter: </strong>
      <input
        type="checkbox"
        id="confirmed"
        name="confirmed"
        v-model="checkedConfirmed"
        checked
      />
      <label for="confirmed">Confirmed</label>
      <input
        type="checkbox"
        id="deaths"
        name="deaths"
        v-model="checkedDeaths"
        checked
      />
      <label for="deaths">Deaths</label>
      <input
        type="checkbox"
        id="recovered"
        name="recovered"
        v-model="checkedRecovered"
        checked
      />
      <label for="recovered">Recovered</label>
    </div>
    <div class="table-container">
      <table>
        <tr class="row-1">
          <td><strong>Date</strong></td>
          <td v-if="checkedConfirmed"><strong>Confirmed</strong></td>
          <td v-if="checkedDeaths"><strong>Deaths</strong></td>
          <td v-if="checkedRecovered"><strong>Recovered</strong></td>
        </tr>

        <tr v-for="dailyStats in countryPerDay" :key="dailyStats.ID">
          <td>{{ formatDate(dailyStats.Date) }}</td>
          <td v-if="checkedConfirmed">{{ dailyStats.Confirmed }}</td>
          <td v-if="checkedDeaths">{{ dailyStats.Deaths }}</td>
          <td v-if="checkedRecovered">{{ dailyStats.Recovered }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'PerDay',
  data() {
    return {
      checkedConfirmed: true,
      checkedDeaths: true,
      checkedRecovered: true,
      loading: true,
    };
  },
  components: {
    PulseLoader,
  },
  computed: {
    isActive() {
      return !this.loading;
    },
    // without mapGetters
    // activeCountry() {
    //   this.$store.getters.activeCountry;
    // }
    ...mapGetters(['countryPerDay', 'activeCountry']),
  },
  methods: {
    formatDate(unformatedDate) {
      const [year, , month, , day] = String(unformatedDate).match(/(\d*)/g);
      return `${day}.${month}.${year}`;
    },
  },

  created() {
    this.$store.dispatch('getDataPerDay');
  },
  updated() {
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped>
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.container {
  display: none;
  h2 {
    span {
      font-weight: 400;
    }
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .filter-container {
    margin: 2rem;
    input {
      margin-left: 1rem;
    }

    animation: fadeInAnimation ease 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .table-container {
    display: flex;
    justify-content: center;
    table,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    td {
      padding: 10px;
    }
    .row-1 {
      background: whitesmoke;
    }
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
}
.active {
  display: block;
}
</style>
