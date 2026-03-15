import { Gamepad2, RotateCcw } from "lucide-react";
import Board from "./components/Board";
import { useState } from "react";
import { BoardState } from "./types";
import { checkWinner, isBoardFull } from "./helpers/game-logic";

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const winner = checkWinner(board);
  const isDraw = !winner && isBoardFull(board);

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
  };

  const getGameStatus = () => {
    if (winner) return `O jogador ${winner} venceu!`;
    if (isDraw) return `Deu empate!`;
    return `A vez do jogador ${currentPlayer}`;
  };

  const currentPlayer = board.filter(Boolean).length % 2 === 0 ? "X" : "O";

  function handleClick(index: number) {
    if (board[index] || winner) return;
    console.log("Square clicked:", index);
    setBoard(board.map((square, i) => (index === i ? currentPlayer : square)));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="w-full max-w-lg rounded-2xl bg-blue-100 p-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Gamepad2 className="h-8 w-8 text-pink" />
          <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
        </div>

        <div className="mb-6 text-center">
          <p className="text-xl font-semibold text-gray-100">
            {getGameStatus()}
          </p>
        </div>

        <Board board={board} winner={winner} onClick={handleClick} />

        {(winner || isDraw) && (
          <div className="mt-8 flex justify-center">
            <button
              className="group flex items-center gap-2 rounded-lg bg-pink px-6 py-3 text-sm text-white hover:opacity-90"
              onClick={handleRestart}
            >
              Reinicar o jogo{" "}
              <RotateCcw className="transistion-transform duration-500 group-hover:-rotate-180" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
