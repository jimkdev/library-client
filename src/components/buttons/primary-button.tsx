export default function PrimaryButton(props: {
    onClick: (event: unknown) => void,
    label: string
}) {
    return <button onClick={props.onClick}>{props.label}</button>
}
