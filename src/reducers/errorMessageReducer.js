import { actionTypes } from '../actions';

export default function (state = false, action) {
  switch (action.type) {
    case actionTypes.GET_SECRET_WORD_ERROR:
      return true;
    default:
      return state;
  }
}