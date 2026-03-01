export default function WordDisplay({ word, guessedLetters }) {
  return (
    <div style={{ fontSize: "2rem", letterSpacing: "10px" }}>
      {word.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
}