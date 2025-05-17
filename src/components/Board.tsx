import { BoardState } from "../types";
import Square from "./Square";

type BoardProps = {
  board: BoardState;
};

export default function Board({ board }: BoardProps) {
  return (
    <div className="mx-auto grid max-w-[26rem] grid-cols-3 gap-4">
      {board.map((square, index) => (
        <Square key={index} value={square} />
      ))}
    </div>
  );
}
