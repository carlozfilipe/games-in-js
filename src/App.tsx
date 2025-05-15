import { Gamepad2 } from "lucide-react";
import Board from "./components/Board";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <div className="w-full max-w-lg rounded-2xl bg-blue-100 p-8">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Gamepad2 className="h-8 w-8 text-pink" />
          <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
        </div>

        <div className="mb-6 text-center">
          <p className="text-xl font-semibold text-gray-100">A vez do jogador X</p>
        </div>

        <Board/>
      </div>
    </main>
  );
}

export default App;
