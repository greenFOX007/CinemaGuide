"use client";
import { useGetMovieByIdQuery } from "@/redux/api/movies/movies.api";
import Spiner from "@/shared/components/Spiner/Spiner";
import { useState, useEffect } from "react";

export default function Page({ params }: { params: { id: number } }) {
  const { data, isLoading, isError } = useGetMovieByIdQuery(params.id);
  const [trailerSize, setTrailerSize] = useState({ x: 960, y: 540 });
  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setTrailerSize({ x: 650, y: 365 });
    }
    if (window.innerWidth <= 700) {
      setTrailerSize({ x: 480, y: 270 });
    }
    if (window.innerWidth <= 500) {
      setTrailerSize({ x: 375, y: 212 });
    }
    if (window.innerWidth > 1000) {
      setTrailerSize({ x: 960, y: 540 });
    }
    const handleResize = (e: UIEvent) => {
      const target = e.target as Window | null;
      if (target && target.innerWidth <= 1000) {
        setTrailerSize({ x: 650, y: 365 });
      }
      if (target && target.innerWidth <= 700) {
        setTrailerSize({ x: 480, y: 270 });
      }
      if (target && target.innerWidth <= 500) {
        setTrailerSize({ x: 375, y: 212 });
      }
      if (target && target.innerWidth > 1000) {
        setTrailerSize({ x: 960, y: 540 });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="pt-[206px] max-[640px]:pt-[56px] pb-[122px] max-md:pb-6 w-full">
      {isLoading && <Spiner />}

      {!isLoading && data && (
        <div>
          <h1 className="text-5xl font-bold py-4 max-[640px]:text-[24px] mb-6">
            {data.title}
          </h1>
          <div className="flex justify-center">
            <iframe
              width={trailerSize.x}
              height={trailerSize.y}
              src={`https://www.youtube.com/embed/${data.trailerYouTubeId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
