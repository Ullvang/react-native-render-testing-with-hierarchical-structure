import { combineReducers } from 'redux';

const INITIAL_STATE_NUMBERS = [1,2];

const INITIAL_STATE_COMPONENT = ["GP", "P"]

const numbersReducer = (state = INITIAL_STATE_NUMBERS, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
        return [...state, action.payload]
    default:
      return state
  }
};

const componentReducer = (state = INITIAL_STATE_COMPONENT, action) => {
    switch (action.type) {
    case "ADD_COMPONENT":
        return [...state, action.payload]
      default:
        return state
    }
  };

export default combineReducers({
  numbers: numbersReducer,
  components: componentReducer
});