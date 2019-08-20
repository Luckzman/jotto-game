import axios from 'axios';
import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  GET_SECRET_WORD_ERROR: 'GET_SECRET_WORD_ERROR',
  NEW_GAME: 'NEW_GAME',
  RESET_GUESS_WORD: 'RESET_GUESS_WORD'
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
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount
      }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  }
}

export const getSecretWord = (userInput) => {
  return (dispatch) => {
    return axios.get('http://localhost:3030')
      .then(response => {
        if (userInput) {
          dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: userInput,
          })
        } else {
          dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: response.data,
          })
        }
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_SECRET_WORD_ERROR
        })
      })
  }
}

export const newGame = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.NEW_GAME });
    dispatch({ type: actionTypes.RESET_GUESS_WORD })
  }
}
