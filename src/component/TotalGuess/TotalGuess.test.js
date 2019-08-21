import React from 'react';
import { shallow } from 'enzyme';

import TotalGuess from './';
import { findTestByAttr, checkProps } from '../../test/testUtils'

const setup = (props) => {
  const wrapper = shallow(<TotalGuess {...props} />);
  return wrapper;
};

describe('TotalGuess Component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      totalGuessNumber: 2
    }
    wrapper = setup(props);
  });
  it('should render the total guess container', () => {
    const totalGuessContainer = findTestByAttr(wrapper, 'total-guess-container');
    expect(totalGuessContainer.length).toBe(1);
  })
  it('should expect `total guess number` to equal the passed in props', () => {
    const totalGuessDisplay = findTestByAttr(wrapper, 'total-guess-display');
    expect(totalGuessDisplay.text()).toContain(props.totalGuessNumber)
  });
  it('should not throw warning with the expected props', () => {
    const expectedProps = { totalGuessNumber: 2 };
    checkProps(TotalGuess, expectedProps);
  });
});