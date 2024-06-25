"use client";

import { useGetTopMoviesQuery } from "@/redux/api/movies/movies.api";
import Image from "next/image";
import Link from "next/link";
import TopBlockSkeleton from "../TopBlockSkeleton/TopBlockSkeleton";
import { useEffect, useRef } from "react";

export default function TopBlock() {
  const { data, isLoading, isError, isSuccess } = useGetTopMoviesQuery();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let speed = 2; // Скорость скролла.
    let left = 0; // отпустили мышку - сохраняем положение скролла
    let drag = false;
    let coorX = 0; // нажали мышку - сохраняем координаты.
    if (scrollRef.current) {
      scrollRef.current.addEventListener("mousedown", function (e) {
        drag = true;
        coorX = e.pageX - this.offsetLeft;
      });
      document.addEventListener("mouseup", function () {
        drag = false;
        if (scrollRef.current) left = scrollRef.current.scrollLeft;
      });
      scrollRef.current.addEventListener("mousemove", function (e) {
        if (drag) {
          this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX) * speed;
        }
      });
    }
  });
  return (
    <div className="py-10 max-md:py-2">
      <h2 className="text-4xl font-bold mb-16 max-md:text-2xl max-md:mb-10">
        Топ 10 фильмов
      </h2>
      <div
        ref={scrollRef}
        className="flex flex-wrap gap-10 justify-center max-md:flex-nowrap max-md:flex-row max-md:h-[400px] max-md:overflow-x-scroll max-md:justify-start max-md:px-4 max-md:py-4"
      >
        {isSuccess && !isLoading && data ? (
          data.map((item, index) => {
            return (
              <Link
                href={"/"}
                key={item.id}
                className="select-none relative w-[224px] h-[336px] rounded-2xl border border-white-opacity shadow-[0px_0px_80px_0px_#FFFFFF54] max-md:shadow-[0px_0px_10px_0px_#FFFFFF54] text-3xl flex justify-center items-center text-center font-bold shrink-0"
              >
                <div className="absolute bg-white text-primery text-[24px] font-bold px-6 py-2 flex justify-center items-center rounded-full -left-3 -top-3">
                  {index + 1}
                </div>
                {item.posterUrl ? (
                  <Image
                    className="size-full rounded-2xl"
                    alt={item.title}
                    src={item.posterUrl}
                    width={224}
                    height={336}
                    title={item.title}
                  />
                ) : (
                  item.title
                )}
              </Link>
            );
          })
        ) : (
          <TopBlockSkeleton />
        )}
      </div>
    </div>
  );
}
