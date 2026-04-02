export default function PrimaryButton(props: {
  styleClasses?: string[],
  onClick?: (event: unknown) => void;
  label: string;
  type?: "button" | "submit";
}) {
  return (
    <button
        className={
          props.styleClasses
            ? props.styleClasses.join(" ")
            : undefined
        }
        onClick={props.onClick}
        type={props.type ?? "button"}>
      {props.label}
    </button>
  );
}
