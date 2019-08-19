import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';
import App, { UnconnectedApp } from './App';
import { storeFactory } from './test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });


const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
};

describe('redux properties', () => {
  it('should access `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  it('should have access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  it('should have access to `secretWord` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessWordsProp = wrapper.instance().props.guessedWords;
    expect(guessWordsProp).toBe(guessedWords);
  });
  it('`getSecretWord` action creator is a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('`getSecretWord` runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  }
  // setup app component with getsecretWorkMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />)

  // run lifecycle method
  wrapper.instance().componentDidMount();

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});
