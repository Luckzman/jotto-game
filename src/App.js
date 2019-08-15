import React, { Component } from 'react';
import { connect } from 'react-redux';

import Congrats from './component/Congrats';
import GuessedWord from './component/GuessedWord';
import Input from './component/Input';
import { getSecretWord } from './actions'

import './App.css';

class App extends Component {
  render() {
    // const guessedWord = [
    //   { guess: 'train', letterMatchCount: 3 },
    //   { guess: 'drunk', letterMatchCount: 1 },
    //   { guess: 'party', letterMatchCount: 5 }
    // ];
    return (
      <div className="container">
        <h1>Jotto Game</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWord guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}
export default connect(mapStateToProps, { getSecretWord })(App);
