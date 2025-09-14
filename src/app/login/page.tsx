"use client";
import Link from "next/link";
import LoginButton from "@/components/buttons/login-button";
import StringUtils from "@/utils/string-utils";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  async function login(formData: FormData) {
    const stringUtils = new StringUtils();
    try {
      const response: Response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL!}/users/login`,
        {
          method: "POST",
          body: JSON.stringify({
            username: stringUtils.trimValue(String(formData.get("username"))),
            password: stringUtils.trimValue(String(formData.get("password"))),
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      if (response.status === 200) {
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form action={login}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <LoginButton label="Login" type="submit" />

        <p>
          Don&#39;t have an account? Register{" "}
          <Link href={"/register"}>here</Link>!
        </p>
      </form>
    </div>
  );
}
