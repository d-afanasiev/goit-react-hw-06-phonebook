import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../redux/reducer";

const rootReducer = combineReducers({
  contacts: reducer,
});

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("contacts", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("contacts");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

// const rootReducer = combineReducers({
//   contacts: reducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
