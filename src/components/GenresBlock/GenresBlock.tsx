import Link from "next/link";
import { genresList } from "@/constants/genres";
import Image from "next/image";

export default async function GenresBlock() {
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      {genresList.map((item, index) => {
        return (
          <Link
            href={`/genre/${item.name}`}
            key={index}
            className="rounded-3xl border border-white-opacity shadow-[0px_0px_80px_0px_#FFFFFF54] w-[290px] h-[304px] overflow-hidden flex flex-col"
          >
            <Image
              className="w-[290px] h-[220px] object-cover"
              alt={item.name}
              src={item.poster}
              width={290}
              height={220}
            />
            <div className="flex items-center justify-center text-[24px] font-bold h-[84px]">
              {item.rusName}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
