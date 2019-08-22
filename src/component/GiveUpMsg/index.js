import React from 'react';
import PropTypes from 'prop-types';

import './GiveUpMsg.scss'

/**
 *
 * @description - GiveUpMsg A React Component 
 * @export function
 * @param {object} props
 * @returns {JSX}
 */
export default function GiveUpMsg(props) {
  const { secretWord } = props;
  return (
    <div data-test='give-up-msg-container' className="alert alert-warning giveup-container">
      <h5 data-test='give-up-msg'>The secret word is <span className="secret">{secretWord}</span></h5>
      <p>Better luck next time</p>
    </div>
  );
};

GiveUpMsg.propTypes = {
  secretWord: PropTypes.string.isRequired,
}
