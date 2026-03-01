import useHangman from "./hooks/useHangman";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import HangmanDrawing from "./components/HangmanDrawing";

export default function App() {
  const {
    word,
    guessedLetters,
    wrongLetters,
    guessLetter,
    isVictory,
    isGameOver,
    resetGame,
  } = useHangman();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Jeu du Pendu</h1>

      <WordDisplay word={word} guessedLetters={guessedLetters} />

      <p>Erreurs : {wrongLetters.length} / 6</p>

      {isVictory && <h2>🎉 Victoire !</h2>}
      {isGameOver && <h2>💀 Perdu ! Le mot était : {word}</h2>}

      <Keyboard
        guessLetter={guessLetter}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        disabled={isVictory || isGameOver}
      />

      <HangmanDrawing wrongLetters={wrongLetters} />

      {(isVictory || isGameOver) && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={resetGame}>Rejouer</button>
        </div>
      )}
    </div>
  );
}