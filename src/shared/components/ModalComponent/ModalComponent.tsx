"use client";
import { useEffect, useRef } from "react";

export default function ModalComponent({
  onClose,
  children,
}: {
  onClose: any;
  children: React.ReactNode;
}) {
  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      modalRef.current && modalRef.current.classList.remove("opacity-0");
    }, 500);

    const onClick = (e: MouseEvent) => {
      if (
        modalContainerRef.current &&
        !modalContainerRef.current.contains(e.target as Node)
      ) {
        modalRef.current && modalRef.current.classList.add("opacity-0");
        setTimeout(() => {
          onClose();
        }, 500);
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      clearTimeout(timer);
    };
  });

  return (
    <div
      ref={modalRef}
      className="flex items-center justify-center absolute inset-x-0 inset-y-0 bg-modal transition-opacity duration-500 opacity-0"
    >
      <div className="my-16 h-ma" ref={modalContainerRef}>
        {children}
      </div>
    </div>
  );
}
