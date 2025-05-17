import { Player } from "../types";

type SquareProps = {
  value: Player | null;
};

export default function Square({ value }: SquareProps) {
  return (
    <button className="h-32 w-32 rounded-xl border-4 border-gray-200 text-4xl font-bold">
      {value}
    </button>
  );
}
