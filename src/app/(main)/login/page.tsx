"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import logo from "@/assets/img/CinemaGuideLogo.png";
import AuthForm from "@/components/AuthForm/AuthForm";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState(true);
  const blockRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (window.innerHeight <= 704) {
      blockRef.current?.classList.add("overflow-y-scroll");
    } else {
      blockRef.current?.classList.remove("overflow-y-scroll");
    }
    const resizeHandler = (e: UIEvent) => {
      const target = e.target as Window | null;
      if (target && target.innerHeight <= 704) {
        blockRef.current?.classList.add("overflow-y-scroll");
      } else {
        blockRef.current?.classList.remove("overflow-y-scroll");
      }
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        ref={blockRef}
        className="w-[420px] max-md:w-[335px] pt-16 pb-16 px-10 max-md:px-5 max-md:pb-8 bg-white rounded-3xl  max-h-[90vh]"
      >
        <div className="flex justify-center mb-10">
          <Image width={180} height={24} src={logo} alt="Logo" />
        </div>
        {loginForm ? (
          <AuthForm />
        ) : (
          <RegistrationForm changeAuth={() => setLoginForm(true)} />
        )}
        <div className="flex justify-center mt-2">
          <button
            className="text-black text-lg font-bold bg-transparent border-none outline-none "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setLoginForm(!loginForm);
            }}
          >
            {loginForm ? "Регистрация" : "У меня есть пароль"}
          </button>
        </div>
      </div>
    </div>
  );
}
