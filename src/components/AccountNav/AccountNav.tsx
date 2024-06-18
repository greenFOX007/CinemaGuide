"use client";
import { HeartSVG, LoginSVG } from "@/shared/IconsSvg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AccountNav() {
  const pathname = usePathname();
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false);

  const navLinkStyles =
    "relative hover:text-activeBtn transition-colors duration-100 flex items-center group";

  const svgHoverStyles =
    "group-hover:fill-activeBtn transition-colors duration-100";

  useEffect(() => {
    if (window.innerWidth <= 650) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
    const resizeHandler = (e: UIEvent) => {
      const target = e.target as Window | null;
      if (target && target.innerWidth <= 650) {
        setIsMobileSize(true);
      } else {
        setIsMobileSize(false);
      }
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  return (
    <nav className="flex items-center ">
      <ul className="flex text-2xl gap-16 max-md:gap-6">
        <li className="">
          <Link
            href="/account"
            className={`${
              pathname === "/account" ? "active" : ""
            } ${navLinkStyles}`}
          >
            <HeartSVG styles={svgHoverStyles} />
            <span className="ml-2">
              {!isMobileSize ? "Избранные фильмы" : "Избранное"}
            </span>
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
            <span className="ml-2">
              {!isMobileSize ? "Настройка аккаунта" : "Настройки"}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
