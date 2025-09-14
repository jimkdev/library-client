"use client"
import Link from "next/link";
import LoginButton from "@/components/buttons/login-button";

export default function LoginPage() {
  async function login(formData: FormData) {
    const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.ok) {
      console.log(await response.json());
    }
  }

  return (
    <div>
      <form action={login}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>

        <LoginButton label="Login"/>

        <p>Don&#39;t have an account? Register <Link href={"/register"}>here</Link>!</p>
      </form>
    </div>
  )
}