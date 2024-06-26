"use client";

import TopBlockSkeleton from "@/components/TopBlockSkeleton/TopBlockSkeleton";
import { IGenres, genresList } from "@/constants/genres";
import { useGetGenreMoviesQuery } from "@/redux/api/movies/movies.api";
import { IGetMoviesWithParamsResponse } from "@/redux/api/movies/movies.types";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import Spiner from "@/shared/components/Spiner/Spiner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [moviesArr, setMoviesArr] = useState<IGetMoviesWithParamsResponse>([]);
  const [page, setPage] = useState(1);
  const genreRusName: IGenres = genresList.filter(
    (item) => item.name === params.slug
  )[0];

  const { data, isLoading, isError, isSuccess } = useGetGenreMoviesQuery({
    genre: params.slug,
    page: page,
  });

  useEffect(() => {
    if (data) {
      setMoviesArr((prevItems) => [...prevItems, ...data]);
    }
  }, [data]);

  const showMoreHandler = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="">
      <Link href={"/genre"} className="">
        <h1 className="text-5xl font-bold flex items-center max-md:text-[24px]">
          <svg
            className="mr-7 max-md:mr-3"
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.04701 11.0012L13.2967 19.2507L10.9397 21.6077L0.333008 11.0012L10.9397 0.394531L13.2967 2.75155L5.04701 11.0012Z"
              fill="white"
            />
          </svg>
          {genreRusName.rusName}
        </h1>
      </Link>
      <div className="flex flex-wrap gap-10 py-16 justify-center">
        {!isLoading &&
          isSuccess &&
          moviesArr &&
          moviesArr.map((item) => {
            return (
              <Link
                href={`/movie/${item.id}`}
                key={item.id}
                className="select-none w-[224px] h-[336px] rounded-2xl border border-white-opacity shadow-[0px_0px_80px_0px_#FFFFFF54] max-md:shadow-[0px_0px_10px_0px_#FFFFFF54] text-3xl flex justify-center items-center text-center font-bold shrink-0"
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
            );
          })}
        {isLoading && <TopBlockSkeleton amountItems={15} />}
      </div>
      <PrimeryButton onClick={showMoreHandler} customStyles="w-[218px] mx-auto">
        {isLoading ? <Spiner /> : "Показать еще"}
      </PrimeryButton>
    </div>
  );
}
