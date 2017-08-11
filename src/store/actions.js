import {ACTIONS} from '../constants/constants';

export function myAction (value) {
  return {
    type: ACTIONS.MY_ACTION,
    value
  }
}
