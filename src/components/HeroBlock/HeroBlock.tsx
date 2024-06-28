"use client";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import MoviesMetaInfo from "../MovieMetaInfo/MovieMetaInfo";
import SecondaryButton from "@/shared/components/SecondaryButton/SecondaryButton";
import { HeartSVG, RefreshSVG } from "@/shared/IconsSvg";
import { useLazyGetRandomMovieQuery } from "@/redux/api/movies/movies.api";
import "./HeroBlock.css";
import { useEffect, useState } from "react";
import { Movie } from "@/redux/api/movies/movies.types";
import HeroBlockSkeleton from "../HeroBlockSkeleton/HeroBlockSkeleton";
import { useRouter } from "next/navigation";

export default function HeroBlock() {
  const router = useRouter();
  const [data, setData] = useState<Movie | null>(null);
  const [getRandomMovieHandler, { isError, isLoading, isSuccess }] =
    useLazyGetRandomMovieQuery();

  const getMovie = async () => {
    const res = await getRandomMovieHandler();
    if (res.data) {
      setData(res.data);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {isSuccess && !isLoading && data ? (
        <div
          className={`pt-[206px] max-[640px]:pt-[56px] pb-[122px] max-md:pb-6 w-full h-full relative`}
        >
          <div
            style={{
              backgroundImage: data.backdropUrl
                ? `url(${data.backdropUrl})`
                : "none",
              backgroundSize: "cover",
            }}
            className="hero-image absolute w-2/3 right-0 top-0 bottom-0 -z-10 max-[640px]:relative max-md:w-5/6 max-[640px]:w-full max-[640px]:h-[260px]"
          ></div>
          <div className="max-w-[600px]">
            <div className="mb-[60px] max-[640px]:pt-6 max-[640px]:mb-8">
              <MoviesMetaInfo
                ratingSize="w-[70px] h-[32px]"
                fontSize={"text-[18px] max-md:text-sm"}
                genre={data?.genres}
                rating={data.tmdbRating}
                releaseYear={data.releaseYear}
                runtime={data.runtime}
              />
              <h1 className="text-5xl font-bold py-4 max-[640px]:text-[24px]">
                {data.title}
              </h1>
              <p className="text-[24px] max-[640px]:text-lg">
                {data.plot.split(".")[0]}
              </p>
            </div>
            <div className=" flex gap-4 flex-wrap">
              <PrimeryButton
                onClick={() => console.log("lol")}
                customStyles={"w-[171px] max-[640px]:w-full"}
              >
                Трейлер
              </PrimeryButton>
              <SecondaryButton
                onClick={() => router.push(`/movie/${data.id}`)}
                customStyles={"w-[171px] max-[640px]:w-[167px]"}
              >
                О фильме
              </SecondaryButton>
              <SecondaryButton
                onClick={() => console.log("lol")}
                customStyles={"w-[68px] group"}
              >
                <HeartSVG styles="group-hover:fill-black" />
              </SecondaryButton>
              <SecondaryButton
                onClick={getMovie}
                customStyles={"w-[68px] group"}
              >
                <RefreshSVG
                  styles="group-hover:fill-black"
                  width={20}
                  height={20}
                />
              </SecondaryButton>
            </div>
          </div>
        </div>
      ) : (
        <HeroBlockSkeleton />
      )}
    </>
  );
}
