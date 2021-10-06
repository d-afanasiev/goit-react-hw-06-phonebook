import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../redux/reducer";

const rootReducer = combineReducers({
  contacts: reducer,
});

// const reducer = (state = rootReducer, action) => state;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
