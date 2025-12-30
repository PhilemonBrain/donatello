export default function Logo() {
  return (
    <div className="logo-container">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved arc - starts upper left, sweeps down behind D's vertical stroke, curves up to right in front of curved part */}
        <path
          d="M 5 8 Q 12 20, 15 30 Q 18 38, 20 42 Q 22 40, 25 35 Q 28 30, 32 28 Q 36 26, 40 25 Q 44 24, 48 26"
          stroke="#1e3a5f"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Stylized D letter - large and prominent, classic serif font */}
        <text
          x="30"
          y="42"
          fontSize="48"
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="#1e3a5f"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          D
        </text>
      </svg>
    </div>
  );
}

