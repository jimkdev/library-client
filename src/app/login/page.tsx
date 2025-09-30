"use client";
import Link from "next/link";
import StringUtils from "@/utils/string-utils";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/buttons/primary-button";

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
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <form
        action={login}
        className="flex flex-col justify-center border-cyan-700 border-2 rounded-xl p-10"
      >
        <h1 className="text-4xl mb-14 text-center">
          Library administration panel
        </h1>
        <label htmlFor="username" className="mb-1 text-lg">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="border-2 border-cyan-700 rounded-md mb-4 p-2"
        />

        <label htmlFor="password" className="mb-1 text-lg">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="border-2 border-cyan-700 rounded-md mb-4 p-2"
        />

        <PrimaryButton label="Login" type="submit" />

        <p className="mt-4 text-center text-md">
          Don&#39;t have an account? Register{" "}
          <Link className="text-blue-500" href={"/register"}>
            here
          </Link>
          !
        </p>
      </form>
    </div>
  );
}
