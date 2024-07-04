"use client";

import Image from "next/image";
import logo from "../../assets/img/CinemaGuideLogo.png";
import Navbar from "../Navbar/Navbar";
import SearchPanel from "../SearchPanel/SearchPanel";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

import { LoginSVG } from "@/shared/IconsSvg";
import { useAuthSelector } from "@/redux/slices/auth";
import { usePathname } from "next/navigation";

export default function Header() {
  const { isAuthenticated, authUser } = useAuthSelector();
  const pathname = usePathname();

  const rootModalRef = useRef<Element | null>(null);
  useEffect(() => {
    rootModalRef.current = document.getElementById("modal-root");
  });
  return (
    <>
      <header
        id="header"
        className="grid grid-cols-[240px_1fr_70px] max-lg:grid-cols-[136px_1fr] justify-items-center h-24 max-lg:h-14 items-center relative"
      >
        <Link href="/" className=" flex">
          <Image src={logo} alt="Logo" />
        </Link>
        <div className=" flex gap-x-10 w-full xl:px-20 lg:px-10 max-lg:w-auto max-lg:px-0 max-lg:gap-5 max-lg:justify-self-end">
          <Navbar />
          <SearchPanel />
          <div className="hidden max-lg:flex items-center">
            <Link
              href={isAuthenticated ? "/account" : "/login"}
              className="group bg-transparent outline-none borde-0"
            >
              <LoginSVG
                styles={
                  "group-hover:fill-activeBtn transition-colors duration-100"
                }
              />
            </Link>
          </div>
        </div>
        <Link
          href={isAuthenticated ? "/account" : "/login"}
          className={`${
            pathname === "/account" || pathname === "/account/settings"
              ? "active"
              : ""
          } text-2xl max-lg:hidden cursor-pointer hover:text-activeBtn transition-colors duration-100 relative`}
        >
          {isAuthenticated ? authUser?.name : "Войти"}
        </Link>
        {String(isAuthenticated)}
        {JSON.stringify(authUser)}
      </header>
    </>
  );
}
