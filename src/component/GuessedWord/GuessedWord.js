import React from 'react';
import PropTypes from 'prop-types';

export function GuessedWord(prop) {
  const { guessedWord } = prop;
  const guessWordInstruction = <h2 data-test='guessWord-instruction'>Try to guess the secret word</h2>;
  const guessWordTable = (
    <div data-test='guessWord-div'>
      <table>
        <thead>
          <tr><th>Guess</th><th>Matching Letters</th></tr>
        </thead>
        <tbody>
          {guessedWord.map((word, index) => (
            <tr data-test='guessWord' key={index}>
              <td>{word.guess}</td>
              <td>{word.letterMatchCount}</td>
            </tr>)
          )}
        </tbody>
      </table>
    </div>
  )

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