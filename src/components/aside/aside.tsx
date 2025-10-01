import Link from "next/link";
import { JSX } from "react";

export default function Aside(): JSX.Element {
  return (
    <div className="min-w-[10%] max-w-[10%] h-[100%] flex flex-col flex-wrap justify-center items-center bg-cyan-700 text-white">
      <ul className="text-lg w-[100%]">
        <li className="w-[100%]">
          <Link
            className="hover:bg-cyan-800 w-[100%] inline-block text-center p-2"
            href={"/dashboard/home"}
          >
            Home
          </Link>
        </li>
        <li className="w-[100%]">
          <Link
            className="hover:bg-cyan-800 w-[100%] inline-block text-center p-2"
            href={"/dashboard/users"}
          >
            Users
          </Link>
        </li>
        <li className="w-[100%]">
          <Link
            className="hover:bg-cyan-800 w-[100%] inline-block text-center p-2"
            href={"/dashboard/books"}
          >
            Books
          </Link>
        </li>
        <li className="w-[100%]">
          <Link
            className="hover:bg-cyan-800 w-[100%] inline-block text-center p-2"
            href={"/dashboard/book-lendings"}
          >
            Book lendings
          </Link>
        </li>
      </ul>
    </div>
  );
}
