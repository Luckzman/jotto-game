import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description return NewWord component
 * @export
 * @param {object} props
 * @returns {JSX}
 */
export function NewWord(props) {
  return (
    <div data-test='new-word '>
      <button
        data-test='new-word-btn'
        type="button"
        className="btn btn-success mb-4"
        onClick={props.createNewGame}>
        New Word
      </button>
    </div>
  )
}


NewWord.propTypes = {
  createNewGame: PropTypes.func
}
