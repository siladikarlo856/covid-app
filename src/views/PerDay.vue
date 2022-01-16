<template>
  <div id="nav"><router-link to="/">Back</router-link></div>
  <pulse-loader :loading="isLoading" :color="color" :size="size" />
  <div class="container" v-if="!isLoading">
    <h2>
      Selected country: <span>{{ selectedCountry.Country }}</span>
    </h2>
    <div class="filter-container">
      <strong class="filter-title">Filter: </strong>
      <div class="checkboxes-container">
        <div class="checkbox-container">
          <input
            type="checkbox"
            id="confirmed"
            name="confirmed"
            v-model="checkedConfirmed"
            checked
          />
          <label for="confirmed">Confirmed</label>
        </div>
        <div class="checkbox-container">
          <input
            type="checkbox"
            id="deaths"
            name="deaths"
            v-model="checkedDeaths"
            checked
          />
          <label for="deaths">Deaths</label>
        </div>
        <div class="checkbox-container">
          <input
            type="checkbox"
            id="recovered"
            name="recovered"
            v-model="checkedRecovered"
            checked
          />
          <label for="recovered">Recovered</label>
        </div>
      </div>
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
  props: ['countrySlug'],
  data() {
    return {
      checkedConfirmed: true,
      checkedDeaths: true,
      checkedRecovered: true,
      isLoading: true,
    };
  },
  components: {
    PulseLoader,
  },
  computed: {
    // Without mapGetters we can use getters from store like this.
    // countryPerDay() {
    //   this.$store.getters.countryPerDay;
    // }
    ...mapGetters(['selectedCountry', 'countryPerDay', 'countries']),
  },
  methods: {
    /**
     * Format date from "yyyy-mm-ddThh:mm:ssZ" to "dd.mm.yyyy"
     * e.g. "2020-02-25T00:00:00Z" to 25.02.2020
     * @param   {String}unformatedDate  Unformated date - "yyyy-mm-ddThh:mm:ssZ"
     * @return  {String}                Formated date - "dd.mm.yyyy"
     */
    formatDate(unformatedDate) {
      // destructuring data from regex match function
      const [year, , month, , day] = String(unformatedDate).match(/(\d*)/g);
      return `${day}.${month}.${year}`;
    },
  },
  beforeCreate() {
    /**
     * If selectedCountry is undefined get countries list,
     * find selected from the list and set selectedCountry in store
     */
    if (!this.selectedCountry) {
      this.$store
        .dispatch('getCountries')
        .then(() => {
          const countriesList = this.$store.getters.countries;
          const selectedCountryObj = countriesList.find(
            (countryObj) => countryObj.Slug === this.countrySlug,
          );
          this.$store.dispatch('setSelectedCountry', selectedCountryObj);
        })
        .catch((error) => {
          // Show error message. "NotFound" page will be used.
          this.$router.push(`/${process.env.VUE_APP_REPO_NAME}/error`);
          console.log('PerDay beforeCreated error', error);
        });
    }
  },
  created() {
    this.$store
      .dispatch('getDataPerDay', this.countrySlug)
      .then(() => {
        // Data are fetched. Hide loader and display data.
        this.isLoading = false;
      })
      .catch((error) => {
        // Log error message and show "NotFound" page.
        this.$router.push(`/${process.env.VUE_APP_REPO_NAME}/error`);
        console.log('PerDay created() getDataPerDay error: ', error);
      });
  },
};
</script>

<style lang="scss" scoped>
#nav {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  a {
    font-weight: bold;
    color: rgba(66, 185, 131, 1);

    &:hover {
      color: rgb(66, 185, 131, 0.7);
    }
  }
}

.container {
  h2 {
    span {
      font-weight: 400;
    }
    margin-bottom: 2rem;
    // Animation
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .filter-container {
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    animation: fadeInAnimation ease 1.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    .filter-title {
      margin-left: 0;
    }

    .checkboxes-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      @media (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    .checkbox-container {
      margin-left: 1rem;
      label {
        margin-left: 0.5rems;
      }
    }
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
    @media (max-width: 400px) {
      padding: 5px;
      font-size: 0.8rem;
    }
    @media (max-width: 320px) {
      td {
        padding: 5px;
      }
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
