import {combineReducers} from 'redux';

import {ACTIONS} from './../constants/constants';
import initialState from './initialState';

const baseReducer = function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.OPEN_OVERLAY: {
      return Object.assign({}, state, {
        overlayOpen: true
      });
    } break;

    case ACTIONS.MY_ACTION: {
      return Object.assign({}, state, {
        testCounter: state.testCounter += 1
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
