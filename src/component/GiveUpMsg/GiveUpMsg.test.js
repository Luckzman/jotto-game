import React from 'react';
import { shallow } from 'enzyme';

import { findTestByAttr, storeFactory } from '../../test/testUtils'
import Input, { UnconnectedInput } from '.'

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
};
