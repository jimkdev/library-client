import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username"/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>

        <button type="submit">Login</button>

        <p>Don&#39;t have an account? Register <Link href={"/register"}>here</Link>!</p>
      </form>
    </div>
  )
}