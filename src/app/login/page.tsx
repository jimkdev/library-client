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
    <main>
      <section className="background-container">
        <img src="/background.png" alt="background image" />
      </section>

      <section className="login-section">
        <div className="hero">
          <h1>
            Pages
            <div className="logo-container">
              <img src="/logo.png" alt="logo" />
            </div>
            Tales
          </h1>
        </div>
        <div className="login-form-container">
          <form action={login}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />

            <PrimaryButton label="Login" type="submit" />

            <p>
              Don&#39;t have an account?
              <Link href={"/register"}>&#32;Sign up</Link>!
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
