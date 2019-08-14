import { storeFactory } from './test/testUtils';
import { guessWord } from './actions'

describe('guessedWord Action Dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    it('should update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessWords: [{
          guessedWord: 'train',
          letterMatchCount: 3
        }]
      };
      expect(newState).toEqual(expectedState);
    })
    it('should update state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessWords: [{
          guessedWord: 'party',
          letterMatchCount: 5
        }]
      };
      expect(newState).toEqual(expectedState);
    })
  })
  describe('some guessed words', () => {
    const guessWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    })
    it('should update state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessWords: [...guessWords, {
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      };
      expect(newState).toEqual(expectedState);
    })
    it('should update state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessWords: [...guessWords, {
          guessedWord: secretWord,
          letterMatchCount: 5
        }]
      };
      expect(newState).toEqual(expectedState);
    })
  })
});