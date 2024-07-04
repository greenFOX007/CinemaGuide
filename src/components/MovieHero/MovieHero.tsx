"use client";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import MoviesMetaInfo from "../MovieMetaInfo/MovieMetaInfo";
import SecondaryButton from "@/shared/components/SecondaryButton/SecondaryButton";
import { HeartSVG } from "@/shared/IconsSvg";
import {
  useAddFavoritesMutation,
  useGetMovieByIdQuery,
} from "@/redux/api/movies/movies.api";
import "./MovieHero.css";

import HeroBlockSkeleton from "../HeroBlockSkeleton/HeroBlockSkeleton";
import MovieDetail from "../MovieDetails/MovieDetails";
import { useRouter } from "next/navigation";
import { useAuthSelector } from "@/redux/slices/auth";
import { useEffect, useState } from "react";
import { useGetAuthUserQuery } from "@/redux/api/auth/auth.api";
import { checkIsInFavorite } from "@/helpers/checkIsInFavorite";
import { toast } from "react-toastify";

export default function MovieHero({ id }: { id: number }) {
  const { isAuthenticated } = useAuthSelector();
  const { data, isLoading, isError, isSuccess } = useGetMovieByIdQuery(id);
  const router = useRouter();
  const [addFavoritesHandler] = useAddFavoritesMutation();
  const [isInFavorites, setIsInFavorites] = useState(false);
  const { data: authUser } = useGetAuthUserQuery();

  useEffect(() => {
    if (authUser && data) {
      setIsInFavorites(checkIsInFavorite(authUser?.favorites, data.id));
    }
  }, [authUser, data, isInFavorites]);

  useEffect(() => {
    if (isError) throw new Error();
  }, [isError]);

  const handleAddFavorite = () => {
    if (isAuthenticated) {
      return addFavoritesHandler({ id: String(id) });
    } else {
      router.push("/login");
    }
  };

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
                  onClick={() => router.push(`/movie/trailer/${id}`)}
                  customStyles={"w-[171px]"}
                >
                  Трейлер
                </PrimeryButton>
                <SecondaryButton
                  onClick={async () => {
                    const res: any = await handleAddFavorite();
                    if (res?.error && res?.error?.status === 400) {
                      toast.info("Вы уже добавили это фильм");
                    } else if (res?.error && res?.error?.status !== 400) {
                      toast.error("Что-то пошло не так!");
                    }
                  }}
                  customStyles={"w-[68px] group"}
                >
                  <HeartSVG
                    color={isInFavorites ? "red" : ""}
                    styles="group-hover:fill-black"
                  />
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
