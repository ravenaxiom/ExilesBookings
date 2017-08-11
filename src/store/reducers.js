import {combineReducers} from 'redux';

import {ACTIONS} from './../constants/constants';
import initialState from './initialState';

const baseReducer = function (state = initialState, action) {
  switch (action) {
    case ACTIONS.MY_ACTION: {
      return Object.assign({}, state, {
        testCounter: state.testCounter += action.value
      });
    } break;

    default: {
      return state;
    }
  }
};

const reducer = combineReducers({
  baseReducer
});

export default reducer;
