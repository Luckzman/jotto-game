import React from 'react';

export default function ServerError() {
  return (
    <div data-test="server-error-container" className="alert alert-danger">
      <p data-test="server-error-msg">There is an error retrieving the secret word. <br />please try again.</p>
    </div>
  )
}