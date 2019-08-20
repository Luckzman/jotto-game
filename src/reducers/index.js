import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessWordsReducer';
import secretWord from './secretWordReducer';
import error from './errorMessageReducer'

export default combineReducers({
  error,
  success,
  guessedWords,
  secretWord,
});