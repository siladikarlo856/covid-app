/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
import axios from 'axios';
import * as types from '../../mutation-types';

const state = {
  globalSummary: {},
  countriesSummary: [],
  selectedCountry: {},
};

const mutations = {
  [types.UPDATE_GLOBAL_SUMMARY](state, payload) {
    state.globalSummary = payload;
  },
  [types.UPDATE_COUNTRIES_SUMMARY](state, payload) {
    state.countriesSummary = payload;
  },
  [types.UPDATE_SELECTED_COUNTRY](state, payload) {
    state.selectedCountry = payload;
  },
};

const actions = {
  getSummary({ commit }) {
    axios
      .get('https://api.covid19api.com/summary')
      .then((response) => {
        // commit mutations
        commit(types.UPDATE_GLOBAL_SUMMARY, response.data.Global);
        commit(types.UPDATE_COUNTRIES_SUMMARY, response.data.Countries);
      })
      .catch((e) => {
        console.log('getSummary error: ', e);
      });
  },
  setSelectedCountry({ commit }, countryObj) {
    commit(types.UPDATE_SELECTED_COUNTRY, countryObj);
  },
};

const getters = {
  globalSummary: (state) => state.globalSummary,
  countriesSummary: (state) => state.countriesSummary,
  selectedCountry: (state) => state.selectedCountry,
};

const summaryModule = {
  state,
  mutations,
  actions,
  getters,
};

export default summaryModule;
