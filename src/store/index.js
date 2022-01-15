import { createStore } from 'vuex';
import perDay from './module/per_day';
import summary from './module/summary';

export default createStore({
  modules: {
    perDay,
    summary,
  },
});
