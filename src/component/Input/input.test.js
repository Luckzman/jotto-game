import React from 'react';
import { shallow } from 'enzyme';

import { findTestByAttr, storeFactory } from './../../test/testUtils'
import Input, { UnconnectedInput } from './'

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
};

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

describe('redux props', () => {
  it('should have success piece of state as a prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  it('shoud check that `guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function)
  })
});

describe('input Component Action', () => {
  let guessWordMock = jest.fn();
  const props = {
    guessWord: guessWordMock
  }
  let wrapper = shallow(<UnconnectedInput {...props} />);
  let submitButton = findTestByAttr(wrapper, 'submit-button');
  const guessWord = 'train';
  beforeEach(() => {
    wrapper.instance().inputBox = { value: guessWord }
    submitButton.simulate('click', { preventDefault() { } });
    wrapper.update();

  });
  test('`guessWord` action on button click', () => {
    const guessWordMockCount = guessWordMock.mock.calls.length;
    expect(guessWordMockCount).toBe(1);
  });
  test(' call `guessWord` with input value as argument', () => {
    const guessWordMockArg = guessWordMock.mock.calls[0][0];
    expect(guessWordMockArg).toBe(guessWord);
  });
  test('input box clears after submitting', () => {
    expect(wrapper.instance().inputBox.value).toBe('');
  })

})