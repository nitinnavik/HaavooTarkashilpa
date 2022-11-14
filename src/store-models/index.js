import {action, createStore} from 'easy-peasy';

const Store = createStore({
  city: '',
  setCity: action((state, payload) => {
    // alert(payload)
    return {
      ...state,
      city: payload,
    };
  }),
  searchQuery: null,
  setSearchQuery: action((state, payload) => {
    // alert(JSON.stringify(payload))
    return {
      ...state,
      searchQuery: payload,
    };
  }),
  filterObject: {
    city: '',
    area: '',
    search_query: '',
    page: '',
    type: '',
    category: '',
    sort: '',
  },
  setBusinessFilterObject: action((state, payload) => {
    // alert(JSON.stringify(payload))
    return {
      ...state,
      filterObject: payload,
    };
  }),
});
export default Store;
