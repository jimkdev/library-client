import Link from "next/link";

export default function RegistrationPage() {
  return (
    <div>
      <form>
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

        <label htmlFor="username">Password</label>
        <input type="password" name="password" />

        <button type="submit">Sign up</button>

        <p>Already have an account? Login <Link href={"/login"}>here</Link>!</p>
      </form>
    </div>
  );
}
