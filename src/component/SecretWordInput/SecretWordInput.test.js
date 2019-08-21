import React from 'react';
import { shallow } from 'enzyme';

import { SecretWordInput } from '.'
import { findTestByAttr, checkProps } from '../../test/testUtils';

describe('SecretWordInput Component', () => {
  let wrapper;
  const props = {
    getSecretWord: jest.fn(),
    hideInput: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<SecretWordInput {...props} />)
  })
  it('should render component without any error', () => {
    const secretWordForm = findTestByAttr(wrapper, 'secret-word-form');
    expect(secretWordForm.length).toBe(1)
  })
});
