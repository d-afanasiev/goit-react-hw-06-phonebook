import { combineReducers } from "redux";
import * as types from "./types";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      const findContacts = state.find(
        (contact) => contact.name === payload.name
      );

      if (!findContacts) {
        return [...state, payload];
      } else {
        alert(`${payload.name} is already in contacts.`);
        return state;
      }

    case types.DELETE:
      return state.filter((contact) => contact.id !== payload.id);

    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
