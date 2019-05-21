import React from 'react';

function Jokes(props) {
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
    <ul className="jokes" style={{ listStyleType: 'none', padding: '0 1rem' }}>
      {jokeList}
    </ul>
  );
}

export default Jokes;
