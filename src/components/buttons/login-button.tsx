"use client";

import PrimaryButton from "@/components/buttons/primary-button";

export default function LoginButton(props: {
  label: string;
  type?: "submit" | "button";
}) {
  return <PrimaryButton type={props.type ?? "button"} label={props.label} />;
}
