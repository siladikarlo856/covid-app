import { createStore } from 'vuex';
import axios from 'axios';

import * as types from './mutation-types';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const state = {
  globalSummary: {},
  countriesSummary: [],
  countryPerDay: [],
};

const mutations = {
  [types.UPDATE_GLOBAL_SUMMARY](state, payload) {
    state.globalSummary = payload;
  },
  [types.UPDATE_COUNTRIES_SUMMARY](state, payload) {
    state.countriesSummary = payload;
  },
  [types.UPDATE_COUNTRY_PER_DAY](state, payload) {
    state.countryPerDay = payload;
  },
  [types.SET_ACTIVE_COUNTRY](state, payload) {
    console.log('mutation: SET_ACTIVE_COUNTRY payload:', payload);
    // eslint-disable-next-line no-return-assign
    state.countriesSummary.map((countryObj) =>
      countryObj.ID === payload
        ? (countryObj.active = true)
        : (countryObj.active = false),
    );
  },
};

const actions = {
  getSummary({ commit }) {
    axios
      .get('https://api.covid19api.com/summary')
      .then((response) => {
        // add "active" property to all items
        const countriesSummary = response.data.Countries.map((el) => {
          el.active = false;
          return el;
        });
        // mark first country as active
        countriesSummary[0].active = true;
        // commit mutations
        commit(types.UPDATE_GLOBAL_SUMMARY, response.data.Global);
        commit(types.UPDATE_COUNTRIES_SUMMARY, countriesSummary);
      })
      .catch((e) => {
        console.log('getSummary error: ', e);
      });
  },
  getDataPerDay({ commit }) {
    const country = this.getters.getActiveCountry.Slug;
    console.log('country: ', country);
    axios
      .get(`https://api.covid19api.com/dayone/country/${country}`)
      .then((response) => {
        // reverse order
        const reversedDataPerDay = response.data.reverse();
        commit(types.UPDATE_COUNTRY_PER_DAY, reversedDataPerDay);
      })
      .catch((e) => {
        console.log('getDataPerDay error: ', e);
      });
  },
  setActiveCountry({ commit }, countryId) {
    console.log('action: setActiveCountry id:', countryId);
    commit(types.SET_ACTIVE_COUNTRY, countryId);
  },
};

const getters = {
  globalSummary: (state) => state.globalSummary,
  countriesSummary: (state) => state.countriesSummary,
  countryPerDay: (state) => state.countryPerDay,
  getActiveCountry: (state) => {
    return state.countriesSummary.find((country) => country.active);
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
