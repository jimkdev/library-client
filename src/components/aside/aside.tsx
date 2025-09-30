import Link from "next/link";
import { JSX } from "react";

export default function Aside(): JSX.Element {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/dashboard/users"}>Users</Link>
        </li>
        <li>
          <Link href={"/dashboard/books"}>Books</Link>
        </li>
        <li>
          <Link href={"/dashboard/book-lendings"}>Book lendings</Link>
        </li>
      </ul>
    </div>
  );
}
