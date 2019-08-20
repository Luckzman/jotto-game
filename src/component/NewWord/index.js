import React from 'react';
import PropTypes from 'prop-types';

export function NewWord(props) {
  return (
    <div data-test='new-word'>
      <button
        data-test='new-word-btn'
        type="button"
        className="btn btn-success mb-2"
        onClick={props.createNewGame}>
        New Word
      </button>
    </div>
  )
}


NewWord.propTypes = {
  createNewGame: PropTypes.func
}
