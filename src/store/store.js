import {createStore} from 'redux';

import reducers from './reducers';

export default function buildStore (initialState) {
  return createStore(reducers, initialState);
}
