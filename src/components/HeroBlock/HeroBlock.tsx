"use client";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import MoviesMetaInfo from "../MovieMetaInfo/MovieMetaInfo";
import SecondaryButton from "@/shared/components/SecondaryButton/SecondaryButton";
import { HeartSVG, RefreshSVG } from "@/shared/IconsSvg";
import {
  useGetRandomMovieQuery,
  useLazyGetRandomMovieQuery,
} from "@/redux/api/movies/movies.api";
import "./HeroBlock.css";
import { useEffect, useState } from "react";
import { Movie } from "@/redux/api/movies/movies.types";

export default function HeroBlock() {
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
      {isSuccess && !isLoading && data && (
        <div className={`pt-[206px] pb-[122px] w-full h-full relative`}>
          <div
            style={{
              backgroundImage: data.backdropUrl
                ? `url(${data.backdropUrl})`
                : "none",
              backgroundSize: "cover",
            }}
            className="hero-image absolute w-2/3 right-0 top-0 bottom-0 -z-10"
          ></div>
          <div className="max-w-[600px]">
            <div className="mb-[60px]">
              <MoviesMetaInfo
                ratingSize="w-[70px] h-[32px]"
                fontSize={"text-[18px]"}
                genre={data?.genres}
                rating={data.tmdbRating}
                releaseYear={data.releaseYear}
                runtime={data.runtime}
              />
              <h1 className="text-5xl font-bold py-4">{data.title}</h1>
              <p className="text-[24px]">{data.plot.split(".")[0]}</p>
            </div>
            <div className=" flex gap-4">
              <PrimeryButton
                onClick={() => console.log("lol")}
                customStyles={"w-[171px]"}
              >
                Трейлер
              </PrimeryButton>
              <SecondaryButton
                onClick={() => console.log("lol")}
                customStyles={"w-[171px]"}
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
      )}
    </>
  );
}
