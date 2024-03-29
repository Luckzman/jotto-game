import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSecretWord } from '../../actions';

export class SecretWordInput extends Component {

  state = {
    secret: '',
  }

  /**
     *
     * @description grab text from input box
     * @param {object} event - event object
     * @memberof SecretWordInput
     * @returns {void}
     */
  handleChange = (event) => {
    this.setState({ secret: event.target.value })
  }

  /**
   * @description this function update the secret word the user secret word 
   * @param {object} evt - Javascript event object
   * @memberof SecretWordInput
   * @returns {void}
   */
  createSecretWord = (evt) => {
    evt.preventDefault()
    const { secret } = this.state;
    this.props.getSecretWord(secret);
    this.props.hideInput()
  }

  render() {
    const { secret } = this.state;

    return (
      <form data-test='secret-word-form'>
        <p>Enter a secret word for someone to guess</p>
        <input
          className="mb-2 mx-sm-3"
          value={secret}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-success ml-3"
          onClick={this.createSecretWord}>
          Submit
        </button>
      </form>
    )
  }
}

SecretWordInput.propTypes = {
  getSecretWord: PropTypes.func.isRequired,
  hideInput: PropTypes.func.isRequired
}

export default connect(null, { getSecretWord })(SecretWordInput);