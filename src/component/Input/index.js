import React from 'react';
import { connect } from 'react-redux';
import { guessWord, newGame } from '../../actions';
import GiveUpMsg from '../GiveUpMsg';
import { NewWord } from '../NewWord';

import './Input.scss';

export class UnconnectedInput extends React.Component {
  state = {
    isHidden: true,
    secret: ''
  }

  /**
   *
   * @description grab text from input box
   * @param {object} event - event object
   * @memberof UnconnectedInput
   * @returns {void}
   */
  handleChange = (event) => {
    this.setState({ secret: event.target.value })
  }

  /**
   * @description - this function populates the store with user guessed word
   * @param {object} event - event object
   * @memberof UnconnectedInput
   * @returns {void}
   */
  handleSubmit = (event) => {
    event.preventDefault()
    const { secret } = this.state;
    if (secret.length > 0) {
      this.props.guessWord(secret);
      this.setState({ secret: '' })
    }
  }

  /**
   * @description This function hides the input box, button by setting is `isHidden` to `false`
   *
   * @memberof UnconnectedInput
   * @returns {void}
   */
  giveUpGame = () => {
    this.setState({ isHidden: false })
  }

  /**
   * @description this function restart the game and also reset the data
   *
   * @memberof UnconnectedInput
   * @returns {void}
   */
  handleNewGame = () => {
    this.props.newGame();
    this.setState({ isHidden: true })
  }

  render() {
    const { success, guessedWords, secretWord } = this.props;
    const { isHidden, secret } = this.state;
    const input = (
      isHidden ?
        <React.Fragment>
          <p data-test='guessWord-instruction'>Try to guess the secret word</p>
          <form className="form-inline mb-4">
            <input
              data-test="input-box"
              className="mb-2 mx-sm-3 userInput"
              value={secret}
              onChange={this.handleChange}
              id="word-guess"
              type="text"
              placeholder="enter guess"
            />
            <button
              data-test="submit-button"
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this.handleSubmit}>
              Submit
          </button>
            {guessedWords && (guessedWords.length > 0) && (
              <button
                data-test="give-up-btn"
                type="submit"
                className="btn btn-danger mb-2 ml-2"
                onClick={this.giveUpGame}>
                Give Up
            </button>)}
          </form>
        </React.Fragment>
        : (
          <React.Fragment>
            <GiveUpMsg secretWord={secretWord} />
            <NewWord createNewGame={this.handleNewGame} />
          </React.Fragment>
        )
    )

    return (<div data-test="input-container">
      {!success && input}
    </div>)
  };
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps, { guessWord, newGame })(UnconnectedInput)
