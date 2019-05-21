import React from 'react';
import logo from './logo.svg';
import './App.css';

import Joke from './components/Joke';

function App() {
  return (
    <div>
      <h1>Short jokes</h1>
      <Joke
        joke={[
          {
            question: 'Helvetica and Times New Roman walk into a bar.',
            answer: "The bartender told them -We don't serve your type-",
          },
          {
            question: 'Did you hear about the actor who fell through the floorboards?',
            answer: 'He was just going through a stage.',
          },
        ]}
      />
    </div>
  );
}

export default App;
