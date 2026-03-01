const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export default function Keyboard({ guessLetter, disabled }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => guessLetter(letter)}
          disabled={disabled}
          style={{ margin: "5px", padding: "10px" }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}