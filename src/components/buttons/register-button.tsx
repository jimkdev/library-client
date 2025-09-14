"use client"

import PrimaryButton from "@/components/buttons/primary-button";

async function register() {
    console.log("register");
}

export default function RegisterButton(props: {
    label: string
}) {
    return <PrimaryButton onClick={register} label={props.label}/>
}