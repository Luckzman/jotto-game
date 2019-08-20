import React from 'react';
import { shallow } from 'enzyme';

import { NewWord } from './';
import { findTestByAttr, checkProps, } from '../../test/testUtils';

const setup = (initialState) => {

  const wrapper = shallow(<NewWord />);
  return wrapper;
};

// setup()
describe('NewWord Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  })
  it('should render `NewWord Component without error` ', () => {
    const newWord = findTestByAttr(wrapper, 'new-word');
    expect(newWord.length).toBe(1);
  });
  it('should render `NewWord Button` without error', () => {
    const newWordBtn = findTestByAttr(wrapper, 'new-word-btn');
    expect(newWordBtn.length).toBe(1);
  });
  it('should not throw warning with expected props', () => {
    const expectedProps = { createNewGame: jest.fn() };
    checkProps(NewWord, expectedProps);
  })
});
