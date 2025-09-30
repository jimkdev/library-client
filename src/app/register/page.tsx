"use client";
import Link from "next/link";
import { JSX } from "react";
import StringUtils from "@/utils/string-utils";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/buttons/primary-button";

export default function RegistrationPage(): JSX.Element {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const stringUtils: StringUtils = new StringUtils();

    try {
      if (process.env.NEXT_PUBLIC_API_URL) {
        const response: Response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
          {
            method: "POST",
            body: JSON.stringify({
              username: stringUtils.trimValue(String(formData.get("username"))),
              password: stringUtils.trimValue(String(formData.get("password"))),
              mobile:
                "+30" + stringUtils.trimValue(String(formData.get("mobile"))),
              firstName: stringUtils.trimValue(
                String(formData.get("first-name")),
              ),
              lastName: stringUtils.trimValue(
                String(formData.get("last-name")),
              ),
              email: stringUtils.trimValue(String(formData.get("email"))),
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );

        if (response.status === 201) {
          router.push("/login");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <form
        action={handleSubmit}
        className="flex flex-col justify-center border-cyan-700 border-2 rounded-xl p-10"
      >
        <h1 className="text-4xl mb-14 text-center">
          Library administration panel
        </h1>
        <label htmlFor="first-name" className="mb-1 text-lg">
          First name
        </label>
        <input
          type="text"
          name="first-name"
          className="border-2 border-cyan-700 rounded-md mb-4 p-2"
        />

        <label htmlFor="last-name" className="mb-1 text-lg">
          Last name
        </label>
        <input
          type="text"
          name="last-name"
          className="border-2 border-cyan-700 rounded-md mb-4 p-2"
        />

        <label htmlFor="mobile" className="mb-1 text-lg">
          Mobile phone
        </label>
        <input
          type="text"
          name="mobile"
          className="border-2 border-cyan-700 rounded-md mb-4 p-2"
        />

        <label htmlFor="username" className="mb-1 text-lg">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="border-2 border-cyan-700 rounded-md mb-4 p-2"
        />

        <label htmlFor="email" className="mb-1 text-lg">
          Email
        </label>
        <input
          type="text"
          name="email"
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

        <PrimaryButton label="Register" type="submit" />

        <p className="mt-4 text-center text-md">
          Already have an account? Login{" "}
          <Link href={"/login"} className="text-blue-500">
            here
          </Link>
          !
        </p>
      </form>
    </div>
  );
}
