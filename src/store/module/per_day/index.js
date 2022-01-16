/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
import axios from 'axios';
import * as types from '../../mutation-types';

const state = {
  countries: [],
  countryPerDay: [],
};

const mutations = {
  [types.UPDATE_COUNTRIES](state, payload) {
    state.countries = payload;
  },
  [types.UPDATE_COUNTRY_PER_DAY](state, payload) {
    state.countryPerDay = payload;
  },
};

const actions = {
  getCountries({ commit }) {
    return axios
      .get(`${process.env.VUE_APP_COVID_API_BASE_URL}/countries`)
      .then((response) => {
        commit(types.UPDATE_COUNTRIES, response.data);
        return Promise.resolve(response.status);
      })
      .catch((error) => {
        console.log('getCountries error: ', error);
        return Promise.reject(error);
      });
  },
  getDataPerDay({ commit }, countrySlug) {
    return axios
      .get(
        `${process.env.VUE_APP_COVID_API_BASE_URL}/dayone/country/${countrySlug}`,
      )
      .then((response) => {
        // Stores data in reverse order to show latest date first.
        commit(types.UPDATE_COUNTRY_PER_DAY, response.data.reverse());
        return Promise.resolve(response.status);
      })
      .catch((error) => {
        console.log('getDataPerDay error: ', error);
        return Promise.reject(error.response.status);
      });
  },
};

const getters = {
  countries: (state) => state.countries,
  countryPerDay: (state) => state.countryPerDay,
};

const perDayModule = {
  state,
  mutations,
  actions,
  getters,
};

export default perDayModule;
