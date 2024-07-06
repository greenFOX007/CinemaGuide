"use client";
import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import MoviesMetaInfo from "../MovieMetaInfo/MovieMetaInfo";
import SecondaryButton from "@/shared/components/SecondaryButton/SecondaryButton";
import { HeartSVG, RefreshSVG } from "@/shared/IconsSvg";
import {
  useAddFavoritesMutation,
  useLazyGetRandomMovieQuery,
} from "@/redux/api/movies/movies.api";
import "./HeroBlock.css";
import { useEffect, useState } from "react";
import { Movie } from "@/redux/api/movies/movies.types";
import HeroBlockSkeleton from "../HeroBlockSkeleton/HeroBlockSkeleton";
import { useRouter } from "next/navigation";
import { useAuthSelector } from "@/redux/slices/auth";
import { useGetAuthUserQuery } from "@/redux/api/auth/auth.api";
import { checkIsInFavorite } from "@/helpers/checkIsInFavorite";
import { toast } from "react-toastify";

export default function HeroBlock() {
  const router = useRouter();
  const [data, setData] = useState<Movie | null>(null);
  const [getRandomMovieHandler, { isLoading, isSuccess }] =
    useLazyGetRandomMovieQuery();
  const { isAuthenticated } = useAuthSelector();
  const [addFavoritesHandler] = useAddFavoritesMutation();
  const { data: userFavorites } = useGetAuthUserQuery();
  const [isInFavorites, setIsInFavorites] = useState(false);
  const getMovie = async () => {
    const res = await getRandomMovieHandler();
    if (res.data) {
      setData(res.data);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    if (userFavorites && data) {
      setIsInFavorites(checkIsInFavorite(userFavorites?.favorites, data.id));
    }
  }, [userFavorites, data, isInFavorites]);

  const handleAddFavorite = () => {
    if (isAuthenticated && data) {
      return addFavoritesHandler({ id: String(data.id) });
    } else {
      router.push("/login", { scroll: false });
    }
  };

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
                onClick={() => router.push(`/movie/trailer/${data.id}`)}
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
