import React from 'react';
import { connect } from 'react-redux';
import { guessWord, newGame } from '../../actions';
import GiveUpMsg from '../GiveUpMsg';
import { NewWord } from '../NewWord';

export class UnconnectedInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();
  }

  state = {
    isHidden: true,
    secret: ''
  }

  handleChange = (event) => {
    this.setState({ secret: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { secret } = this.state;
    this.props.guessWord(secret);
    this.setState({ secret: '' })
  }

  giveUpGame = () => {
    this.setState({ isHidden: false })
  }

  handleNewGame = () => {
    this.props.newGame();
    this.setState({ isHidden: true })
  }

  render() {
    const { success, guessedWords, secretWord } = this.props;
    const { isHidden, secret } = this.state;
    const input = (
      isHidden ?
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
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
              className="btn btn-danger mb-2 ml-4"
              onClick={this.giveUpGame}>
              Give Up
          </button>)}
        </form> : (
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
