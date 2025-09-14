"use client"

import PrimaryButton from "@/components/buttons/primary-button";

export default function RegisterButton(props: {
    label: string
}) {
    return (
        <PrimaryButton
            label={props.label}
            type="submit"
        />
    );
}