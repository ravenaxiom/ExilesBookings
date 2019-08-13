import {createStore} from 'redux';

import reducers from './reducers';

export default function buildStore (initialState) {
  return createStore(reducers,
    initialState,

    // enable redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
