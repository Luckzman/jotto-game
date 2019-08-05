import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './';
import { findTestByAttr } from './../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}) => shallow(<Congrats {...props} />);

describe('Congrats Component', () => {
  it('should render without an error when success is true', () => {
    const wrapper = setup({ success: true });
    const congratsComponent = findTestByAttr(wrapper, 'congrats-component');
    expect(congratsComponent.length).toBe(1);
  });
  it('should not render any text when `success` props is false', () => {
    const wrapper = setup({ success: false });
    const congratsComponent = findTestByAttr(wrapper, 'congrats-component');
    expect(congratsComponent.length).toBe(0)
  });
  it('should return non-empty congrats message if `success` props is true', () => {
    const wrapper = setup({ success: true });
    const congratsMsg = findTestByAttr(wrapper, 'congrats-message');
    expect(congratsMsg.text().length).not.toBe(0);
  });
});