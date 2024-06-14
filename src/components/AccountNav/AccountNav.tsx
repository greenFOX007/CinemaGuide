"use client";
import { HeartSVG, LoginSVG } from "@/shared/IconsSvg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNav() {
  const pathname = usePathname();

  const navLinkStyles =
    "relative hover:text-activeBtn transition-colors duration-100 flex items-center group";

  const svgHoverStyles =
    "group-hover:fill-activeBtn transition-colors duration-100";

  return (
    <nav className="flex items-center max-lg:hidden ">
      <ul className="flex text-2xl gap-16">
        <li className="">
          <Link
            href="/account"
            className={`${
              pathname === "/account" ? "active" : ""
            } ${navLinkStyles}`}
          >
            <HeartSVG styles={svgHoverStyles} />
            <span className="ml-2">Избранные фильмы</span>
          </Link>
        </li>
        <li className="">
          <Link
            href="/account/settings"
            className={`${
              pathname === "/account/settings" ? "active" : ""
            } ${navLinkStyles}`}
          >
            <LoginSVG styles={svgHoverStyles} />
            <span className="ml-2">Настройка аккаунта</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
