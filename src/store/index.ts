import { createStore } from 'vuex'
import axios from "axios";
import {SET_GAMES, FILTER_GAMES, FILTER_ORDER, SET_FETCHING_PROGRESS} from './mutation-types';
import {FETCH_GAMES} from './action-types';
import {GET_FETCHING_PROGRESS, GET_GAMES} from './getter-types';
import {GAMES_API} from "@/constants/constants";
import {makeItFloat} from "@/helpers/number-helpers";

const store = createStore({
  state: {
    games: null,
    gamesRaw: null,
    isFetching: true
  },
  getters: {
    [GET_GAMES]: (state) => state.games,
    [GET_FETCHING_PROGRESS]: (state) => state.isFetching
  },
  mutations: {
    [SET_GAMES]: (state, data) => {
      state.games = data;
      state.gamesRaw = data;
    },
    [SET_FETCHING_PROGRESS]: (state, bool) => {
      state.isFetching = bool;
    },
    [FILTER_GAMES]: (state, parameter) => {
      const data:any = state.gamesRaw;
      state.games = data.filter((v:any, i:any) =>
          v.name.toLowerCase().includes(parameter.name))
          .filter((v:any, i:any) => makeItFloat(v) >= parseFloat(parameter.rating || 1));
    },
    [FILTER_ORDER]: (state, parameter) => {

      const data:any = state.games;
      const sort = parameter.sort === 'true' ? true : false;

      if( parameter.orderBy === 'name') {
        state.games = sort ? data.sort((a:any, b:any) => (a.name > b.name) ? 1 : -1) :
            data.sort((a:any, b:any) => (b.name > a.name) ? 1 : -1);
      }

      if( parameter.orderBy === 'rating') {
        state.games = sort ? data.sort((a:any, b:any) => (a.rating > b.rating) ? 1 : -1) :
            data.sort((a:any, b:any) => (b.rating > a.rating) ? 1 : -1);
      }

      if( parameter.orderBy === 'date') {
        state.games = sort ? data.sort((a:any, b:any) => (a.first_release_date > b.first_release_date) ? 1 : -1) :
            data.sort((a:any, b:any) => (b.first_release_date > a.first_release_date) ? 1 : -1);
      }

    },
  },
  actions: {
    [FETCH_GAMES]: async () => {
      const {data} = await axios.get(GAMES_API);
      store.commit(SET_GAMES,data);
      store.commit(SET_FETCHING_PROGRESS,false);
    }
  },
  modules: {
  }
});

export default store;