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
  /**
   *  Request of new and total cases per country from API and commit store mutation.
   *
   * @param {object} context    Exposes set of methods/properties (commit, state, getters, dispatch) on the store instance.
   * @returns {Promise<number>} Return promise together with response status.
   */
  getSummary({ commit }) {
    return axios
      .get(`${process.env.VUE_APP_COVID_API_BASE_URL}/summary`)
      .then((response) => {
        // commit mutations
        commit(types.UPDATE_GLOBAL_SUMMARY, response.data.Global);
        commit(types.UPDATE_COUNTRIES_SUMMARY, response.data.Countries);
        return Promise.resolve(response.status);
      })
      .catch((error) => {
        console.log('getSummary error: ', error);
        return Promise.reject(error.response.status);
      });
  },
  /**
   * Commit store mutation to set selected country.
   *
   * @param {object} context    Exposes set of methods/properties (commit, state, getters, dispatch) on the store instance.
   * @param {object} countryObj Selected country object used to update the store.
   */
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
