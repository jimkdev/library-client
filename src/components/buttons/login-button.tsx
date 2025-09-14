"use client"

import PrimaryButton from "@/components/buttons/primary-button";

async function login() {
    console.log("login");
}

export default function LoginButton(props: {
    label: string
}) {
    return <PrimaryButton onClick={login} label={props.label}/>
}