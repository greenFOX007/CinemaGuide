import { SearchSVG } from "@/shared/IconsSvg";
import { ChangeEvent, forwardRef, useEffect, useRef, useState } from "react";
import debounce from "@/helpers/debounce";
import { useLazyGetMoviesWithParamsQuery } from "@/redux/api/movies/movies.api";
import Spiner from "@/shared/components/Spiner/Spiner";
import SearchedItemCard from "../SearchedItemCard/SearchedItemCard";
import { Movie } from "@/redux/api/movies/movies.types";

export const SearchWidget = forwardRef(function SearchWidget(props, ref: any) {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const searchOpenHandler = () => {
    setIsSearchOpen(true);
  };

  const [getMovieHandler, { data, isLoading, isSuccess, isError }] =
    useLazyGetMoviesWithParamsQuery();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  });

  const handleChange = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
    const queryString = `count=5&title=${e.target.value}`;
    const res = await getMovieHandler(queryString);
    console.log(data);
  }, 300);

  return (
    <div
      onClick={searchOpenHandler}
      ref={ref}
      className={`relative w-full py-3 px-4 flex bg-secondary items-center rounded-lg  max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-4`}
    >
      <SearchSVG />
      <input
        // ref={inputRef}
        onChange={handleChange}
        className="w-full outline-none bg-transparent ml-3 text-lg"
        type="text"
        placeholder="Поиск"
      />
      {isSearchOpen && (
        <div className="absolute bg-secondary min-h-20 top-[120%] left-0 right-0 rounded-bl-lg rounded-br-lg flex justify-center items-center">
          {isLoading && <Spiner />}
          {isSuccess && data.length > 0 && (
            <ul className="w-full px-4 py-2">
              {data.map((item: Movie) => (
                <SearchedItemCard
                  genre={item.genres}
                  id={item.id}
                  posterUrl={item.posterUrl}
                  rating={item.tmdbRating}
                  releaseYear={item.releaseYear}
                  runtime={item.runtime}
                  title={item.title}
                  key={item.id}
                />
              ))}
            </ul>
          )}
          {!data && !isLoading && "Введите название, чтобы начать"}
          {data?.length == 0 && !isLoading && isSuccess && "Ничего не найдено"}
        </div>
      )}
    </div>
  );
});
