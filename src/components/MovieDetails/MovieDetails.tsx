import { Movie } from "@/redux/api/movies/movies.types";
import "./MovieDetails.css";

export default function MovieDetail({ data }: { data: Movie }) {
  return (
    <div className="">
      <h3 className="text-[40px] font-bold mb-16 max-md:text-[24px] max-md:mb-10">
        О фильме
      </h3>
      <div className="flex gap-2">
        <div className="w-[320px]">
          <div className="flex gap-2 mb-6">
            <div className="flex whitespace-nowrap text-[18px]">
              Язык оригинала
            </div>
            <div className="underline w-full relative "></div>
          </div>
          <div className="flex gap-2 mb-6">
            <div className="flex whitespace-nowrap text-[18px]">Бюджет</div>
            <div className="underline w-full relative"></div>
          </div>
          <div className="flex gap-2 mb-6">
            <div className="flex whitespace-nowrap text-[18px]">Выручка</div>
            <div className="underline w-full relative"></div>
          </div>
          <div className="flex gap-2 mb-6">
            <div className="flex whitespace-nowrap text-[18px]">Режиссёр</div>
            <div className="underline w-full relative"></div>
          </div>
          <div className="flex gap-2 mb-6">
            <div className="flex whitespace-nowrap text-[18px]">Продакшен</div>
            <div className="underline w-full relative"></div>
          </div>
          <div className="flex gap-2 mb-6">
            <div className="flex whitespace-nowrap text-[18px]">Награды</div>
            <div className="underline w-full relative"></div>
          </div>
        </div>
        <div className="">
          <div className="mb-6 text-[18px]">
            {data.language ? data.language : "en"}
          </div>
          <div className="mb-6 text-[18px]">
            {data.budget ? data.budget : "10 000$"}
          </div>
          <div className="mb-6 text-[18px]">
            {data.revenue ? data.revenue : "20 000$"}
          </div>
          <div className="mb-6 text-[18px]">
            {data.director ? data.director : "Стивен спилберг"}
          </div>
          <div className="mb-6 text-[18px]">
            {data.production ? data.production : "Мосфильм"}
          </div>
          <div className="mb-6 text-[18px]">
            {data.awardsSummary ? data.awardsSummary : "Нет наград"}
          </div>
        </div>
      </div>
    </div>
  );
}
