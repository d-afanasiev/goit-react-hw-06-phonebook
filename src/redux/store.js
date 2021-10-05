import { createStore } from "redux";

const initialState = {
  contacts: {
    item: [],
    filter: "",
  },
};

const reducer = (state = initialState, action) => state;

const store = createStore(reducer);

export default store;
