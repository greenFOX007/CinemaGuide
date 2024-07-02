"use client";
import StarSVG from "@/shared/IconsSvg";
import Spiner from "@/shared/components/Spiner/Spiner";
import Image from "next/image";
import Link from "next/link";
import MoviesMetaInfo from "../MovieMetaInfo/MovieMetaInfo";
type TSearchedItemCard = {
  id: number;
  posterUrl: string;
  title: string;
  rating: number;
  releaseYear: number;
  genre: Array<string>;
  runtime: number;
};

export default function SearchedItemCard({
  genre,
  posterUrl,
  rating,
  releaseYear,
  runtime,
  title,
  id,
}: TSearchedItemCard) {
  return (
    <li className="rounded-lg hover:shadow-[0px_0px_7px_1px_rgba(0,0,0,0.75)] transition-all duration-300">
      <Link href={`/movie/${id}`} className="flex px-2 py-4 ">
        <div className="mr-4">
          <Image width={40} height={52} src={posterUrl} alt={title} />
        </div>
        <div className="flex flex-col justify-between">
          <MoviesMetaInfo
            ratingSize="w-[45px] h-5"
            fontSize="text-xs"
            genre={genre}
            rating={rating}
            releaseYear={releaseYear}
            runtime={runtime}
          />
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </Link>
    </li>
  );
}
