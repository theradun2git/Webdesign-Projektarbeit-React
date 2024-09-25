import React, { useState } from 'react';

const GuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const secretNumber = Math.floor(Math.random() * 100) + 1; // Dies erzeugt eine zufällige Zahl zwischen 1 und 100

  const handleGuess = (event) => {
    setGuess(event.target.value);
  };

  const checkGuess = () => {
    if (+guess === secretNumber) {
      setMessage('Glückwunsch! Sie haben die Zahl erraten!');
    } else {
      setMessage('Leider falsch. Versuchen Sie es noch einmal!');
    }
  };

  return (
    <div>
      <p>Rate eine Zahl von 1 bis 100:</p>
      <input type="number" value={guess} onChange={handleGuess} />
      <button onClick={checkGuess}>Rate</button>
      <p>{message}</p>
    </div>
  );
};

export default GuessingGame;