export default function PrimaryButton(props: {
  onClick?: (event: unknown) => void;
  label: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      className="border-2 border-cyan-700 bg-cyan-700 text-white rounded-md mt-4 p-1 text-lg"
      onClick={props.onClick}
      type={props.type ?? "button"}
    >
      {props.label}
    </button>
  );
}
