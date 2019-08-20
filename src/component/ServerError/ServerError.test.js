import React from 'react';
import { shallow } from 'enzyme';

import ServerError from '.'
import { findTestByAttr } from '../../test/testUtils'

describe('Server Error', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ServerError />)
  })
  it('should render component without Error', () => {
    const serverErrorContainer = findTestByAttr(wrapper, 'server-error-container');
    expect(serverErrorContainer.length).toBe(1)
  })
  it('should should display error message', () => {
    const serverErrorMsg = findTestByAttr(wrapper, 'server-error-msg');
    expect(serverErrorMsg.text().length).not.toBe(0)
  })
});
