import {weatherReducer} from "./weather/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";

export const baseState: any = {
  degreesType: "C"
  // currentCity: "Омск"
};

const mainReducer = combineReducers({
  weatherData: weatherReducer
});

const withDevTools = () => {
  switch (process.env.NODE_ENV) {
  case "development":
    return composeWithDevTools(applyMiddleware(thunk));
  case "production" :
    return applyMiddleware(thunk);
  default: "development";
  }
};

export function initializeStore(initialState = baseState) {
  return createStore(
    mainReducer,
    initialState,
    withDevTools()
  );
}
