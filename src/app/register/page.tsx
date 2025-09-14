"use client";
import Link from "next/link";
import { JSX } from "react";
import RegisterButton from "@/components/buttons/register-button";
import StringUtils from "@/utils/string-utils";
import { useRouter } from "next/navigation";

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
    <div>
      <form action={handleSubmit}>
        <label htmlFor="first-name">First name</label>
        <input type="text" name="first-name" />

        <label htmlFor="last-name">Last name</label>
        <input type="text" name="last-name" />

        <label htmlFor="mobile">Mobile phone</label>
        <input type="text" name="mobile" />

        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <RegisterButton label={"Register"} />

        <p>
          Already have an account? Login <Link href={"/login"}>here</Link>!
        </p>
      </form>
    </div>
  );
}
