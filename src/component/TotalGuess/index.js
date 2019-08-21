import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @description This Component returns all the total number of guessess
 * @export TotalGuess
 * @param {object} props
 * @returns {JSX}
 */
export default function TotalGuess(props) {
  const { totalGuessNumber } = props;
  return (
    <div data-test='total-guess-container'>
      <h5 data-test='total-guess-display'>Total Guesses: {totalGuessNumber}</h5>
    </div>
  )
};

TotalGuess.propTypes = {
  totalGuessNumber: PropTypes.number.isRequired
}
