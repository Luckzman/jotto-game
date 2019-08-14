import React from 'react';
import { shallow } from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findTestByAttr, storeFactory } from './../../test/testUtils'
import Input from './'

// Enzyme.configure({ adapter: new EnzymeAdapter() })


const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState)
    });
    it('should render without error', () => {
      const inputContainer = findTestByAttr(wrapper, 'input-container');
      expect(inputContainer.length).toBe(1);
    });
    it('should render input box', () => {
      const inputBox = findTestByAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    it('should render submit button', () => {
      const submitButton = findTestByAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  })
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);

    });
    it('should render without error', () => {
      const inputContainer = findTestByAttr(wrapper, 'input-container');
      expect(inputContainer.length).toBe(1);
    });
    it('should not render input box', () => {
      const inputBox = findTestByAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    it('should not render submit button', () => {
      const submitButton = findTestByAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  })
})

describe('updated state', () => {

});
