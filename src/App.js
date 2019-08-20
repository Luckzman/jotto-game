import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './component/Congrats';
import GuessedWord from './component/GuessedWord';
import Input from './component/Input';
import { getSecretWord, newGame } from './actions'

import './App.css';
import TotalGuess from './component/TotalGuess';
import { NewWord } from './component/NewWord';

export class UnconnectedApp extends Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();

  }
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  state = {
    isHidden: false
  }

  handleNewGame = () => {
    this.props.newGame();
    this.props.getSecretWord();
  }

  inputSecretWord = () => {
    this.setState({ isHidden: true })
  }

  createSecretWord = (evt) => {
    evt.preventDefault()
    this.props.getSecretWord(this.inputBox.current.value);
    this.inputBox.current.value = '';
    this.setState({ isHidden: false })

  }

  render() {
    const { success, guessedWords } = this.props;
    const { isHidden } = this.state;
    return (
      <div className="container">
        <h1>Jotto Game</h1>
        <h3>the secret word is {this.props.secretWord}</h3>
        <Congrats success={success} />
        {success && <NewWord createNewGame={this.handleNewGame} />}
        <Input />
        <GuessedWord guessedWords={guessedWords} />
        {guessedWords.length > 0 && <TotalGuess totalGuessNumber={guessedWords.length} />}
        {guessedWords.length === 0 && (
          <button
            className="btn btn-primary mt-5"
            onClick={this.inputSecretWord}
          >
            Enter your own secret word
          </button>
        )}
        {isHidden && (
          <form>
            <p>Enter a secret word for someone to guess</p>
            <input
              className="mb-2 mx-sm-3"
              ref={this.inputBox}
            />
            <button
              className="btn btn-success ml-3"
              onClick={this.createSecretWord}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}
export default connect(mapStateToProps, { getSecretWord, newGame })(UnconnectedApp);
