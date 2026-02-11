"use client";
import Link from "next/link";
import StringUtils from "@/utils/string-utils";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/buttons/primary-button";
import { useApplicationContext } from "@/contexts/application.context";

export default function LoginPage() {
  const router = useRouter();
  const applicationContext = useApplicationContext();

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
        const { data } = await response.json();
        const context = {
          token: data.accessToken,
        };
        applicationContext.setContext(context);
        localStorage.setItem("token", context.token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form action={login}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Username" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />

        <PrimaryButton label="Login" type="submit" />

        <p>
          Don&#39;t have an account? Create a new one{" "}
          <Link href={"/register"}>here</Link>!
        </p>
      </form>
    </div>
  );
}
