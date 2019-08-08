/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../reducers'

/**
 * @description returns test with a given data-test attribute
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper
 * @param {string} value value of data-test attribute
 * @return {ShallowWrapper}
 */
export const findTestByAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

/**
 * A utility function to check proptypes
 * @param {JSX} component
 * @param {object} conformingProps 
 */
export const checkProps = (component, conformingProps) => {
  const propsExpected = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propsExpected).toBeUndefined();
};

/**
 * @description A function that returns the Store
 * @param {object} initialState
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState)
}
