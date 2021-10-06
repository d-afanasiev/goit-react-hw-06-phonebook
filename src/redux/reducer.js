import { combineReducers } from "redux";
import { ADD, DELETE, FILTER } from "./types";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
});
