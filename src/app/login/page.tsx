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
          <div className="logo-container">
            <img src="/logo.png" alt="logo" />
          </div>
          <h1 className="dancing-script-font">Papyrus</h1>
        </div>
        <div className="login-form-container mt-[105px]">
          <img alt="spiral" className="spiral-img" src="/spiral.svg" />
          <h2 className="lato-black">Sign in</h2>
          <p className="lato-regular">Welcome back! Sign in to continue.</p>
          <form action={login} className="mt-[50px]">
            <label className="lato-medium" htmlFor="username">Username</label>
            <input
              className="mt-[10px] lato-light-italic"
              type="text"
              id="username"
              name="username"
              placeholder="Your username" />

            <label className="lato-medium mt-[40px]" htmlFor="password">Password</label>
            <input
              className="mt-[10px] lato-light-italic"
              type="password"
              id="password"
              name="password"
              placeholder="Your password" />

            <Link
              className="text-right underline mt-[10px] lato-medium"
              id="forgot-password-link"
              href="/forgot-password"
            >Forgot password?</Link>

            <PrimaryButton
              styleClasses={["mt-[47px]", "login-button", "lato-medium"]}
              label="Sign in"
              type="submit" />

            <p className="lato-regular text-center mt-[10px]">
              Don&#39;t have an account?
              <Link className="underline" id="sign-up-link" href="/register">&#32;Sign up</Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
