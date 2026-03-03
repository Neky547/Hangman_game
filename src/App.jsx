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


    <div className="app-container">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div className="box">
          <h1>Jeu du Pendu</h1>
        </div>

        <WordDisplay word={word} guessedLetters={guessedLetters} />

        <p>Erreurs : {wrongLetters.length} / 9</p>

        {/* Clavier */}
        <div className="keyborard">
          <Keyboard
            guessLetter={guessLetter}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            disabled={isVictory || isGameOver}
          />
        </div>

        {/* Dessin */}
        <div className="hangmanDrawing">
          <HangmanDrawing wrongLetters={wrongLetters} />
        </div>


        {/* Message victoire / défaite */}
        {(isVictory || isGameOver) && (
          <div className="box" style={{ marginTop: "20px" }}>
            {isVictory && <h2>🎉 Gagné !</h2>}
            {isGameOver && <h2>💀 Perdu ! Le mot était : {word}</h2>}
          </div>
        )}

        {(isVictory || isGameOver) && (
          <div style={{ marginTop: "20px" }}>
            <button onClick={resetGame}>Rejouer</button>
          </div>
        )}
      </div>

    </div>

  );
}