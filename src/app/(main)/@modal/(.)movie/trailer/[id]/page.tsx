"use client";
import { useGetMovieByIdQuery } from "@/redux/api/movies/movies.api";
import ModalComponent from "@/shared/components/ModalComponent/ModalComponent";
import Spiner from "@/shared/components/Spiner/Spiner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TrailerModal({ params }: { params: { id: number } }) {
  const router = useRouter();
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
    <ModalComponent
      onClose={() => {
        router.back();
      }}
    >
      <div className="">
        {isLoading && <Spiner />}
        {!isLoading && data && (
          <iframe
            width={trailerSize.x}
            height={trailerSize.y}
            src={`https://www.youtube.com/embed/${data.trailerYouTubeId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </ModalComponent>
  );
}
