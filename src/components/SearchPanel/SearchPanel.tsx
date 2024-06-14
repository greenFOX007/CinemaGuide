import React, { useEffect, useRef, useState } from "react";
import { SearchWidget } from "../SeachWidget/SearchWidget";
import { createPortal } from "react-dom";
import { SearchSVG } from "@/shared/IconsSvg";

export default function SearchPanel() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<Element | null>(null);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth <= 976) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    ref.current = document.getElementById("header");
    setMounted(true);

    const onClick = (e: MouseEvent) => {
      (searchContainerRef.current &&
        searchContainerRef.current.contains(e.target as Node)) ||
        setIsWidgetOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  });

  useEffect(() => {
    window.addEventListener("resize", (e: UIEvent) => {
      const target = e.target as Window | null;
      if (target && target.innerWidth <= 976) {
        setIsMobile(true);
        return;
      }
      setIsMobile(false);
    });
  }, []);

  return (
    <div className="w-full">
      {!isMobile && <SearchWidget ref={searchContainerRef} />}

      <div className="hidden max-lg:flex items-center">
        <button
          onClick={() => setIsWidgetOpen(true)}
          className="bg-transparent outline-none borde-0 group"
        >
          <SearchSVG styles="group-hover:fill-activeBtn transition-colors duration-100" />
        </button>
        {isWidgetOpen &&
          isMobile &&
          mounted &&
          createPortal(
            <SearchWidget ref={searchContainerRef} />,
            ref.current as Element
          )}
      </div>
    </div>
  );
}
