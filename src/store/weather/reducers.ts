import {baseState} from "../store";

export const weatherReducer = (state = baseState, action) => {
  switch (action.type) {
  case "ACTIONS": {
    return state = {...state, [action.payload.var]: action.payload.val};
  }
  default: state;
  }
  return state;
};
