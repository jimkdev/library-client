"use client"
import Link from "next/link";
import {redirect} from "next/navigation";

export default function RegistrationPage() {
  async function register(formData: FormData) {
    const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/users/register`, {
      method: "POST",
      body: JSON.stringify({
        first_name: formData.get("first-name"),
        last_name: formData.get("last-name"),
        mobile: formData.get("mobile"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.ok) {
      redirect("/login");
    }
  }

  return (
    <div>
      <form action={register}>
        <label htmlFor="first-name">First name</label>
        <input type="text" name="first-name"/>

        <label htmlFor="last-name">Last name</label>
        <input type="text" name="last-name"/>

        <label htmlFor="mobile">Mobile phone</label>
        <input type="text" name="mobile"/>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <label htmlFor="email">Email</label>
        <input type="text" name="email"/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <button type="submit">Sign up</button>

        <p>Already have an account? Login <Link href={"/login"}>here</Link>!</p>
      </form>
    </div>
  );
}
