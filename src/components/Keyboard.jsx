const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Keyboard({
  guessLetter,
  guessedLetters,
  wrongLetters,
  disabled,
}) {
  return (
    <div style={{ marginTop: "30px" }}>
      {alphabet.map((letter) => {
        const isGuessed = guessedLetters.includes(letter);
        const isWrong = wrongLetters.includes(letter);

        return (
          <button
            key={letter}
            onClick={() => guessLetter(letter)}
            disabled={disabled || isGuessed || isWrong}
            style={{
              margin: "5px",
              padding: "10px",
              width: "40px",
              backgroundColor: isGuessed
                ? "#4caf50"
                : isWrong
                ? "#f44336"
                : "#eee",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}