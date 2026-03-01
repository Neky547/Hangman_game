import { useState, useEffect } from "react";
import { words } from "../data/words";

const MAX_ERRORS = 9;

export default function useHangman() {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  }, []);

  const guessLetter = (letter) => {
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
      return;
    }

    if (word.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
    } else {
      setWrongLetters((prev) => [...prev, letter]);
    }
  };

  const isVictory =
    word &&
    word.split("").every((letter) => guessedLetters.includes(letter));

  const isGameOver = wrongLetters.length >= MAX_ERRORS;

  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  return {
    word,
    guessedLetters,
    wrongLetters,
    guessLetter,
    isVictory,
    isGameOver,
    resetGame,
    MAX_ERRORS,
  };
}