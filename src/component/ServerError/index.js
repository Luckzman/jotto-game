import React from 'react';

export default function ServerError() {
  return (
    <div data-test="server-error-container">
      <p data-test="error-message">There is an error retrieving the secret word. pls try again</p>
    </div>
  )
}