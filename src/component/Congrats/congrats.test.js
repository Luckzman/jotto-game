import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './';
import { findTestByAttr, checkProps } from './../../test/testUtils';
// import EnzymeAdapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new EnzymeAdapter() })

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
  it('should not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
  });
});