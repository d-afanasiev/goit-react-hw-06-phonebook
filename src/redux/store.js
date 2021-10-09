import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../redux/reducer";

const rootReducer = combineReducers({
  contacts: reducer,
});

function saveToLocalStorage(state) {
  const serialisedState = JSON.stringify(state);
  localStorage.setItem("contacts", serialisedState);
}

function loadFromLocalStorage() {
  const serialisedState = localStorage.getItem("contacts");
  if (serialisedState === null) return undefined;
  return JSON.parse(serialisedState);
}

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
