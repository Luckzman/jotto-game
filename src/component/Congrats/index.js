import React from 'react';
import PropTypes from 'prop-types';

import './Congrats.scss';

/**
 * Functional react component for congratulatory message
 * @param {object} props - React Props
 * @returns {JSX.Element} Renders conditionally if success is true
 */
export default function Congrats(props) {
  const { success } = props;
  return success && (
    <div data-test='congrats-component' className="alert alert-success congrats-container mb-4">
      <h4 data-test='congrats-message'>Congratulations! You guessed the word!</h4>
    </div>
  )
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}