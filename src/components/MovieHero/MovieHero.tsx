"use client";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import MoviesMetaInfo from "../MovieMetaInfo/MovieMetaInfo";
import SecondaryButton from "@/shared/components/SecondaryButton/SecondaryButton";
import { HeartSVG } from "@/shared/IconsSvg";
import { useGetMovieByIdQuery } from "@/redux/api/movies/movies.api";
import "./MovieHero.css";

import HeroBlockSkeleton from "../HeroBlockSkeleton/HeroBlockSkeleton";
import MovieDetail from "../MovieDetails/MovieDetails";

export default function MovieHero({ id }: { id: number }) {
  const { data, isLoading, isError, isSuccess } = useGetMovieByIdQuery(id);

  console.log(data);

  return (
    <>
      {isSuccess && !isLoading && data ? (
        <>
          <div
            className={`pt-[206px] max-[640px]:pt-[56px] pb-[122px] max-md:pb-6 w-full relative`}
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
                <p className="text-[24px] max-[640px]:text-lg">{data.plot}</p>
              </div>
              <div className=" flex gap-4 flex-wrap">
                <PrimeryButton
                  onClick={() => console.log("lol")}
                  customStyles={"w-[171px]"}
                >
                  Трейлер
                </PrimeryButton>
                <SecondaryButton
                  onClick={() => console.log("lol")}
                  customStyles={"w-[68px] group"}
                >
                  <HeartSVG styles="group-hover:fill-black" />
                </SecondaryButton>
              </div>
            </div>
          </div>
          <MovieDetail data={data} />
        </>
      ) : (
        <HeroBlockSkeleton />
      )}
    </>
  );
}
