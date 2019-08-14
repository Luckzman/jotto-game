export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS'
}

// export const correctGuess = () => {
//   return { type: actionTypes.CORRECT_GUESS };
// };

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 * and conditionally dispatches CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord
 * @returns {function} - Redux Thunk function
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {

  }
}