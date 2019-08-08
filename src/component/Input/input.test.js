import React from 'react';
import { shallow } from 'enzyme';

import { findTestByAttr, storeFactory } from './../../test/testUtils'
import Input from './'

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />).dive().dive();
  console.log(wrapper.debug());
  // return wrapper;
};
setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    it('should render without error', () => {

    });
    it('should render input box', () => {

    });
    it('should render submit button', () => {

    });
  })
  describe('word has been guessed', () => {
    it('should render without error', () => {

    });
    it('should not render input box', () => {

    });
    it('should not render submit button', () => {

    });
  })
})

describe('updated state', () => {

});
