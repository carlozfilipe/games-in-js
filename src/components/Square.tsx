import { Player } from "../types";

type SquareProps = {
  value: Player | null;
  isWinner: boolean;
  onClick: () => void;
};

const getTextColor = (value: Player | null) =>
  value === "X" ? "text-pink" : "text-white";

const getBorderColor = (value: Player | null, isWinner: boolean) => {
  if (!isWinner) return "border-gray-200";
  return value === "X" ? "border-pink" : "border-white";
};

export function Square({ value, isWinner, onClick }: SquareProps) {
  return (
    <button
      className={`h-32 w-32 rounded-xl border-4 text-4xl font-bold ${getTextColor(value)} ${getBorderColor(value, isWinner)}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
