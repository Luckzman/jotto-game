import React from 'react';
import PropTypes from 'prop-types';

export default function GiveUpMsg(props) {
  const { secretWord } = props;
  return (
    <div test-data='give-up-msg-container'>
      <h5>The secret word is {secretWord}</h5>
      <p>Better luck next time</p>
    </div>
  );
};

GiveUpMsg.propTypes = {
  secretWord: PropTypes.string.isRequired,
}