import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './component/Congrats';
import GuessedWord from './component/GuessedWord';
import Input from './component/Input';
import ServerError from './component/ServerError';
import SecretWordInput from './component/SecretWordInput';
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

  // createSecretWord = (evt) => {
  //   evt.preventDefault()
  //   this.props.getSecretWord(this.inputBox.current.value);
  //   this.inputBox.current.value = '';
  //   this.setState({ isHidden: false })

  // }

  render() {
    const { success, guessedWords, error } = this.props;
    const { isHidden } = this.state;
    console.log(`the secret word is ${this.props.secretWord}`)
    return (
      <div className="container">
        <h1>Jotto Game</h1>
        {error ? <ServerError /> :
          (isHidden ? <SecretWordInput hideInput={() => this.setState({ isHidden: false })} />
            :
            <React.Fragment>
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
            </React.Fragment>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord, error } = state;
  return { success, guessedWords, secretWord, error };
}
export default connect(mapStateToProps, { getSecretWord, newGame })(UnconnectedApp);
