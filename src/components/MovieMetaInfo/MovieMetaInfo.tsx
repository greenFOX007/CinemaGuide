import StarSVG from "@/shared/IconsSvg";
import "./MovieMetaInfo.css";

type TSearchedItemCard = {
  rating: number;
  releaseYear: number;
  genre: Array<string>;
  runtime: number;
  fontSize: string;
  ratingSize: string;
};

export default function MoviesMetaInfo({
  genre,
  rating,
  releaseYear,
  runtime,
  fontSize,
  ratingSize,
}: TSearchedItemCard) {
  function raitingColor(rating: number): string {
    if (rating <= 5) return "bg-[#C82020]";
    if (rating > 5 && rating <= 6) return "bg-[#777777]";
    if (rating > 6 && rating <= 8) return "bg-[#308E21]";
    return "bg-[#A59400]";
  }
  return (
    <div className="flex items-center">
      <div
        className={`${ratingSize} ${raitingColor(
          rating
        )} rounded-2xl ${fontSize} font-bold flex justify-center items-center mr-3`}
      >
        <div className="mr-1">
          <StarSVG width={12} height={12} />
        </div>
        {rating.toFixed(1)}
      </div>
      <div className={`${fontSize} mr-3`}>{releaseYear}</div>
      <div className="flex mr-3">
        {genre.slice(0, 3).map((item, index) => {
          return (
            <div key={index} className={`${fontSize} px-1 genreItem relative`}>
              {`${item}`}
            </div>
          );
        })}
      </div>
      <div className={`${fontSize}`}>{runtime} мин</div>
    </div>
  );
}
