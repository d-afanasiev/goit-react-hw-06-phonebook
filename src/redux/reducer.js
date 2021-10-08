import { combineReducers } from "redux";
import { ADD, DELETE, FILTER } from "./types";

const getLocalItems = window.localStorage.getItem("contacts");

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      const findContacts = state.find(
        (contact) => contact.name === payload.name
      );

      if (!findContacts) {
        return [...state, payload];
      } else {
        alert(`${payload.name} is already in contacts.`);
        return state;
      }

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
});
