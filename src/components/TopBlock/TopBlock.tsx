"use client";

import { useGetTopMoviesQuery } from "@/redux/api/movies/movies.api";
import Image from "next/image";
import Link from "next/link";
import TopBlockSkeleton from "../TopBlockSkeleton/TopBlockSkeleton";

export default function TopBlock() {
  const { data, isLoading, isError, isSuccess } = useGetTopMoviesQuery();
  console.log(data);
  return (
    <div className="py-10 max-md:py-2">
      <h2 className="text-4xl font-bold mb-16 max-md:text-2xl max-md:mb-10">
        Топ 10 фильмов
      </h2>
      <div className="flex flex-wrap gap-10 justify-center max-md:flex-nowrap max-md:flex-row max-md:h-[400px] max-md:overflow-x-scroll max-md:justify-start max-md:px-4 max-md:py-4">
        {isSuccess && !isLoading && data ? (
          data.map((item, index) => {
            return (
              <Link
                href={"/"}
                key={item.id}
                className="relative w-[224px] h-[336px] rounded-2xl border border-white-opacity shadow-[0px_0px_80px_0px_#FFFFFF54] max-md:shadow-[0px_0px_10px_0px_#FFFFFF54] text-3xl flex justify-center items-center text-center font-bold shrink-0"
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
