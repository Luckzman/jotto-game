import React from 'react';
import PropTypes from 'prop-types';

import './GuessedWord.scss';

export default function GuessedWord(prop) {
  const { guessedWords } = prop;
  const guessWordTable = (
    <div data-test='guessWord-div' className="guessword-container">
      <table className="table table-sm table-dark">
        <thead className="thead-light">
          <tr><th>Guess No</th><th>Guess</th><th>Matching Letters</th></tr>
        </thead>
        <tbody>
          {guessedWords.map((word, index) => (
            <tr data-test='guessWord' key={index}>
              <td>{index + 1}</td>
              <td>{word.guessedWord}</td>
              <td>{word.letterMatchCount}</td>
            </tr>)
          )}
        </tbody>
      </table>
    </div>
  )

  return (
    <div data-test='guessWord-container'>
      {(guessedWords.length > 0 && guessWordTable)}
    </div>
  );
};

GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  )
}

GuessedWord.defaultProps = {
  guessedWords: []
}