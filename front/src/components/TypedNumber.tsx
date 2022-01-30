import { Backspace } from "@material-ui/icons";

export default function TypedNumber({
  value,
  onUpdate,
}: {
  value: string;
  onUpdate: (arg: string) => void;
}) {
  if (!value) return null;

  return (
    <div
      data-testid="typed-number-section"
      className="flex justify-between flex-grow font-bold text-gray-700"
    >
      <span className="p-2 text-xl rounded-xl bg-emerald-100">{value}</span>
      <button onClick={() => onUpdate(value.slice(0, -1))} data-testid="backspace-button">
        <Backspace fontSize="large" />
      </button>
    </div>
  );
}
