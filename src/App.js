import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jokes from './components/Jokes';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Short Jokes</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Jokes
        jokes={[
          {
            question: `Helvetica and Times New Roman walk into a bar.`,
            answer: `The bartender told them "We don't serve your type."`,
          },
          {
            question: `Did you hear about the actor who fell through the floorboards?`,
            answer: `He was just going through a stage.`,
          },
        ]}
      />
    </div>
  );
}

export default App;
