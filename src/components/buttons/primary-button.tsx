export default function PrimaryButton(props: {
  onClick?: (event: unknown) => void;
  label: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      className="border-2 border-cyan-700 rounded-md mt-4 p-1 text-lg"
      onClick={props.onClick}
      type={props.type ?? "button"}
    >
      {props.label}
    </button>
  );
}
