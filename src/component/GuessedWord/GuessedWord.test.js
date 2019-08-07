import React from 'react';
import { shallow } from 'enzyme';

import { GuessedWord } from './GuessedWord'
import { findTestByAttr, checkProps } from '../../test/testUtils';

const expectedGuess = {
  guessedWord: [{ guess: 'train', letterMatchCount: 3 }]
}
const setup = (props = {}) => shallow(<GuessedWord {...props} />)
test('should not throw warning with expected props', () => {
  checkProps(GuessedWord, expectedGuess);
})

describe('GuessedWord Component with no guessed word', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWord: [] });
  })
  it('should render `GuessedWord` component without error', () => {
    const guessWordContainer = findTestByAttr(wrapper, 'guessWord-container');
    expect(guessWordContainer.length).toBe(1);
  })
  it('should render text instruction when there is no guessed word', () => {
    const guessWordInstruction = findTestByAttr(wrapper, 'guessWord-instruction');
    expect(guessWordInstruction.text().length).not.toBe(0)
  })
});

describe('GuessWord Component with some guessedWord', () => {

})
