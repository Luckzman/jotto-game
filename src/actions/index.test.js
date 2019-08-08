import { actionTypes, correctGuess } from './'

describe('CorrectGuess', () => {
  it('should dispatch action type of `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
  })
})