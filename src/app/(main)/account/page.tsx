"use client";
import {
  useGetFavoritesQuery,
  useRemoveFavoriteMovieMutation,
} from "@/redux/api/movies/movies.api";
import Link from "next/link";
import Image from "next/image";
import TopBlockSkeleton from "@/components/TopBlockSkeleton/TopBlockSkeleton";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function Account() {
  const { data, isLoading, isError, isSuccess } = useGetFavoritesQuery();
  const [removeHandler] = useRemoveFavoriteMovieMutation();
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

  useEffect(() => {
    if (isError) throw new Error();
  }, [isError]);

  return (
    <div
      ref={scrollRef}
      className="flex flex-wrap py-16 gap-10 justify-center max-md:flex-nowrap max-md:flex-row max-md:h-[400px] max-md:overflow-x-scroll max-md:justify-start max-md:px-4 max-md:py-10"
    >
      {isSuccess && !isLoading && data
        ? data.map((item) => {
            return (
              <div className="group relative" key={item.id}>
                <Link
                  href={`/movie/${item.id}`}
                  className=" select-none  w-[224px] h-[336px] rounded-2xl border border-white-opacity shadow-[0px_0px_80px_0px_#FFFFFF54] max-md:shadow-[0px_0px_10px_0px_#FFFFFF54] text-3xl flex justify-center items-center text-center font-bold shrink-0"
                >
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
                <button
                  onClick={async () => {
                    const res = await removeHandler(item.id);

                    res.data && toast.success("Успешно!");
                    res.error && toast.error("Что-то пошло не так!");
                  }}
                  className="group-hover:flex absolute bg-white text-primery text-[24px] font-bold size-10 hidden max-md:flex justify-center items-center rounded-full -right-5 -top-3"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9997 5.5865L11.9495 0.636719L13.3637 2.05093L8.4139 7.0007L13.3637 11.9504L11.9495 13.3646L6.9997 8.4149L2.04996 13.3646L0.635742 11.9504L5.5855 7.0007L0.635742 2.05093L2.04996 0.636719L6.9997 5.5865Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            );
          })
        : !isError && <TopBlockSkeleton />}
    </div>
  );
}
