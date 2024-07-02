"use client"; // Error components must be Client Components

import PrimeryButton from "@/shared/components/PrimeryButton/PrimeryButton";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="py-[160px]">
      <h2 className="text-center text-5xl font-bold mb-10">
        Что-то пошло не так...
      </h2>
      <PrimeryButton
        customStyles="px-10 mx-auto"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Попробуйте снова
      </PrimeryButton>
    </div>
  );
}
