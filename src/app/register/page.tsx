"use client"
import Link from "next/link";
import {JSX} from "react";
import {redirect} from "next/navigation";
import RegisterButton from "@/components/buttons/register-button";

async function handleSubmit(formData: FormData) {
  try {
    if (process.env.NEXT_PUBLIC_API_URL) {
      const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
        method: "POST",
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
          mobile: formData.get("mobile"),
          firstName: formData.get("first-name"),
          lastName: formData.get("last-name"),
          email: formData.get("email"),
        }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      // redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
}

export default function RegistrationPage(): JSX.Element {
  return (
    <div>
      <form action={handleSubmit}>
        <label htmlFor="first-name">First name</label>
        <input
            type="text"
            name="first-name"
        />

        <label htmlFor="last-name">Last name</label>
        <input
            type="text"
            name="last-name"
        />

        <label htmlFor="mobile">Mobile phone</label>
        <input
            type="text"
            name="mobile"
        />

        <label htmlFor="username">Username</label>
        <input
            type="text"
            name="username"
        />

        <label htmlFor="email">Email</label>
        <input
            type="text"
            name="email"
        />

        <label htmlFor="password">Password</label>
        <input
            type="password"
            name="password"
        />

        <RegisterButton label={"Register"} />

        <p>Already have an account? Login <Link href={"/login"}>here</Link>!</p>
      </form>
    </div>
  );
}
