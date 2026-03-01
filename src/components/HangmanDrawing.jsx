export default function HangmanDrawing({ wrongLetters }) {
  const errors = wrongLetters.length;

  return (
    <svg height="250" width="200">
      {/* Base */}
      <line x1="10" y1="240" x2="190" y2="240" stroke="#333" strokeWidth="4" />

      {/* Poteau vertical */}
      {errors >= 1 && <line x1="50" y1="240" x2="50" y2="20" stroke="#333" strokeWidth="4" />}

      {/* Barre horizontale */}
      {errors >= 2 && <line x1="50" y1="20" x2="130" y2="20" stroke="#333" strokeWidth="4" />}

      {/* Corde */}
      {errors >= 3 && <line x1="130" y1="20" x2="130" y2="50" stroke="#333" strokeWidth="3" />}

      {/* Tête */}
      {errors >= 4 && <circle cx="130" cy="70" r="20" stroke="#333" strokeWidth="3" fill="#fff" />}

      {/* Yeux */}
      {errors >= 4 && (
        <>
          <circle cx="123" cy="65" r="2" fill="#333" />
          <circle cx="137" cy="65" r="2" fill="#333" />
        </>
      )}

      {/* Corps */}
      {errors >= 5 && <line x1="130" y1="90" x2="130" y2="150" stroke="#333" strokeWidth="3" />}

      {/* Bras */}
      {errors >= 6 && <line x1="130" y1="100" x2="110" y2="130" stroke="#333" strokeWidth="3" />}
      {errors >= 7 && <line x1="130" y1="100" x2="150" y2="130" stroke="#333" strokeWidth="3" />}

      {/* Jambes */}
      {errors >= 8 && <line x1="130" y1="150" x2="110" y2="190" stroke="#333" strokeWidth="3" />}
      {errors >= 9 && <line x1="130" y1="150" x2="150" y2="190" stroke="#333" strokeWidth="3" />}
    </svg>
  );
}