export default function PrimaryButton(props: {
  onClick?: (event: unknown) => void;
  label: string;
  type?: "button" | "submit";
}) {
  return (
    <button onClick={props.onClick} type={props.type ?? "button"}>
      {props.label}
    </button>
  );
}
