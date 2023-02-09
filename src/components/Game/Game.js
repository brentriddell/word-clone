import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

const answer = sample(WORDS);

console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    };
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
