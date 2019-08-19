import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './component/Congrats';
import GuessedWord from './component/GuessedWord';
import Input from './component/Input';
import { getSecretWord } from './actions'

import './App.css';
import TotalGuess from './component/TotalGuess';
import NewWord from './component/NewWord';

export class UnconnectedApp extends Component {
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="container">
        <h1>Jotto Game</h1>
        <h3>the secret word is {this.props.secretWord}</h3>
        <Congrats success={success} />
        <NewWord success={success} />
        <Input />
        <GuessedWord guessedWords={guessedWords} />
        {guessedWords.length > 0 && <TotalGuess totalGuessNumber={guessedWords.length} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
