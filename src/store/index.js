import { createStore } from 'vuex';
import axios from 'axios';

import * as types from './mutation-types';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  globalSummary: {},
  countriesSummary: [],
  countriesPerDay: [],
};

const mutations = {
  [types.UPDATE_GLOBAL_SUMMARY](state, payload) {
    state.globalSummary = payload;
  },
  [types.UPDATE_COUNTRIES_SUMMARY](state, payload) {
    state.countriesSummary = payload;
  },
  [types.UPDATE_COUNTRIES_PER_DAY](state, payload) {
    state.countriesPerDay = payload;
  },
};

const actions = {
  getSummary({ commit }) {
    axios
      .get('https://api.covid19api.com/summary')
      .then((response) => {
        commit(types.UPDATE_GLOBAL_SUMMARY, response.data.Global);
        commit(types.UPDATE_COUNTRIES_SUMMARY, response.data.Countries);
      })
      .catch((e) => {
        console.log('getSummary error: ', e);
      });
  },
};

const getters = {
  globalSummary: (state) => state.globalSummary,
  countriesSummary: (state) => state.countriesSummary,
  countriesPerDay: (state) => state.countriesPerDay,
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
