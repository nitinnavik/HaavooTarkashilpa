import { action, createStore } from "easy-peasy";

const Store = createStore({
  city:'',
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
  
});
export default Store