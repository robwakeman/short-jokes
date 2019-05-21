import React from 'react';

function Joke(props) {
  const styles = {
    // fontStyle: 'italic',
    marginBottom: '2rem',
  };

  const jokes = props.jokes;

  const jokeList = jokes.map((joke, index) => (
    <li style={styles} key={index}>
      <p>{joke.question}</p>
      <p>{joke.answer}</p>
    </li>
  ));

  return (
    <ul className="jokes" style={{ listStyleType: 'none', margin: '3rem 0', padding: 0 }}>
      {jokeList}
    </ul>
  );
}

export default Joke;
