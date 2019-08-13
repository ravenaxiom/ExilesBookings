import {ACTIONS} from '../constants/constants';

export function openOverlay () {
  return {
    type: ACTIONS.OPEN_OVERLAY
  }
}

export function myAction (value) {
  return {
    type: ACTIONS.MY_ACTION,
    value
  }
}
