export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

// Object { square: {…}, player: "X" }
// ​
// player: "X"
// ​
// square: Object { row: 2, col: 0 }
// ​
// <prototype>: Object { … }
