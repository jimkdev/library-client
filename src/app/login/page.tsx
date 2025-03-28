export default function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="username">Password</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}