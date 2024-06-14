"use client";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import MoviesMetaInfo from "../MovieMetaInfo/MovieMetaInfo";
import SecondaryButton from "@/shared/components/SecondaryButton/SecondaryButton";
import { HeartSVG, RefreshSVG } from "@/shared/IconsSvg";
import { useGetRandomMovieQuery } from "@/redux/api/movies/movies.api";

export default function HeroBlock() {
  const { data, isError, isLoading, isSuccess } = useGetRandomMovieQuery();
  console.log(data);
  return (
    <>
      {isSuccess && !isLoading && (
        <div className="max-w-[600px]">
          <div className="mb-[60px]">
            <MoviesMetaInfo
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
              onClick={() => console.log("lol")}
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
      )}
    </>
  );
}
