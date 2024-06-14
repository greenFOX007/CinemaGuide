"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinkStyles =
  " relative hover:text-activeBtn transition-colors duration-100";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex items-center max-lg:hidden">
        <ul className="flex text-2xl">
          <li className="mr-10">
            <Link
              href="/"
              className={`${pathname === "/" ? "active" : ""} ${navLinkStyles}`}
            >
              Главная
            </Link>
          </li>
          <li className="">
            <Link
              href="/genre"
              className={`${
                pathname === "/genre" ? "active" : ""
              } ${navLinkStyles}`}
            >
              Жанры
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hidden max-lg:flex items-center">
        <Link href="/genre" className="bg-transparent outline-none borde-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 9.5C2.51472 9.5 0.5 7.48528 0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5C9.5 7.48528 7.48528 9.5 5 9.5ZM5 19.5C2.51472 19.5 0.5 17.4853 0.5 15C0.5 12.5147 2.51472 10.5 5 10.5C7.48528 10.5 9.5 12.5147 9.5 15C9.5 17.4853 7.48528 19.5 5 19.5ZM15 9.5C12.5147 9.5 10.5 7.48528 10.5 5C10.5 2.51472 12.5147 0.5 15 0.5C17.4853 0.5 19.5 2.51472 19.5 5C19.5 7.48528 17.4853 9.5 15 9.5ZM15 19.5C12.5147 19.5 10.5 17.4853 10.5 15C10.5 12.5147 12.5147 10.5 15 10.5C17.4853 10.5 19.5 12.5147 19.5 15C19.5 17.4853 17.4853 19.5 15 19.5ZM5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5ZM5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5ZM15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5ZM15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C13.6193 12.5 12.5 13.6193 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
