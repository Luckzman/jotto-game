import React from 'react';
import PropTypes from 'prop-types';

const guessWordTable = () => {
  return <div />;
};

export function GuessedWord(prop) {
  const { guessedWord } = prop;
  const guessWordInstruction = <h2 data-test='guessWord-instruction'>Try to guess the secret word</h2>
  return (
    <div data-test='guessWord-container'>
      {(guessedWord.length === 0 ? guessWordInstruction : guessWordTable)}
    </div>
  );
};

GuessedWord.propTypes = {
  guessedWord: PropTypes.arrayOf(
    PropTypes.shape({
      guess: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  )
}

GuessedWord.defaultProps = {
  guessedWord: []
}