import React from 'react';
import { shallow } from 'enzyme';

import { findTestByAttr, checkProps } from '../../test/testUtils'
import GiveUpMsg from './'

const setup = (props = {}) => {
  const wrapper = shallow(<GiveUpMsg {...props} />);
  return wrapper;
};

describe('GiveUpMsg Component', () => {
  let wrapper;
  const secretWord = 'party'
  beforeEach(() => {
    wrapper = setup({ secretWord })
  })
  it('should render component without error', () => {
    const giveUpDiv = findTestByAttr(wrapper, 'give-up-msg-container');
    expect(giveUpDiv.length).toBe(1)
  })
  it('should display secret word', () => {
    const giveUpMsg = findTestByAttr(wrapper, 'give-up-msg')
    expect(giveUpMsg.text()).toContain(secretWord);
  })
  it('should not throw warning with expected props', () => {
    const expectedProps = { secretWord: 'party' };
    checkProps(GiveUpMsg, expectedProps);
  })
})
