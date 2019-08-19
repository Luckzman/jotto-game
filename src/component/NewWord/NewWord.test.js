import React from 'react';
import { shallow } from 'enzyme';

import NewWord from './';
import { findTestByAttr, checkProps, storeFactory } from '../../test/testUtils';

const setup = (initialState) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<NewWord store={store} />).dive().dive();
  return wrapper;
};

// setup()
describe('NewWord Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ success: true });
  })
  it('should render `NewWord Component without error` when success props is true', () => {
    const newWord = findTestByAttr(wrapper, 'new-word');
    expect(newWord.length).toBe(1);
  });
  it('should render `NewWord Component without error` when success props is true', () => {
    const newWordBtn = findTestByAttr(wrapper, 'new-word-btn');
    expect(newWordBtn.length).toBe(1);
  });
  // it('should call createNewGame when NewWord component is clicked', () => {
  //   console.log(wrapper.instance())
  //   // const createNewGame = wrapper.instance().createNewGame()
  //   const newWordBtn = findTestByAttr(wrapper, 'new-word-btn');
  //   newWordBtn.simulate('click')
  //   expect(wrapper.instance().createNewGame()).toHaveBeenCalled();
  // });
  it('should not render `NewWord Component` when success props is false', () => {
    wrapper = setup({ success: false });
    const newWord = findTestByAttr(wrapper, 'new-word');
    expect(newWord.length).toBe(0);
  });
});
