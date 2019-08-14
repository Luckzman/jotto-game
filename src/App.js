import React from 'react';

import Congrats from './component/Congrats';
import GuessedWord from './component/GuessedWord';
import Input from './component/Input';

import './App.css';

function App() {
  const guessedWord = [
    { guess: 'train', letterMatchCount: 3 },
    { guess: 'drunk', letterMatchCount: 1 },
    { guess: 'party', letterMatchCount: 5 }
  ];
  return (
    <div className="container">
      <h1>Jotto Game</h1>
      <Input />
      <Congrats success={true} />
      <GuessedWord guessedWord={guessedWord} />
    </div>
  );
}

export default App;
