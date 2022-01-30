import React from "react";

const digitLetterMap: Record<string, string[]> = {
  "1": [],
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

export default function PhoneDigits({ onAdd }: { onAdd: (letter: string) => void }) {
  return (
    <div className="grid grid-cols-3 grid-row">
      {Object.entries(digitLetterMap).map(([digit, letters]) => (
        <button
          key={digit}
          data-testid={`digit-button-${digit}`}
          className="flex flex-col items-center p-4 m-2 font-bold text-green-700 rounded-xl bg-slate-300 hover:scale-110"
          onClick={() => onAdd(digit)}
        >
          <span className="text-2xl">{digit}</span>
          <span className="tracking-widest text-gray-700">{letters.join("")}</span>
        </button>
      ))}
    </div>
  );
}
