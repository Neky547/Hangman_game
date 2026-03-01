export default function HangmanDrawing({ wrongLetters }) {
  const errors = wrongLetters.length;

  return (
    <div style={{ fontSize: "2rem", marginBottom: "20px" }}>
      {errors >= 1 && <div>🪵</div>}
      {errors >= 2 && <div>🪢</div>}
      {errors >= 3 && <div>🙂</div>}
      {errors >= 4 && <div>👕</div>}
      {errors >= 5 && <div>🦵</div>}
      {errors >= 6 && <div>🦶</div>}
    </div>
  );
}