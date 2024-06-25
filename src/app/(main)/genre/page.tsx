import GenresBlock from "@/components/GenresBlock/GenresBlock";

export default function Genre() {
  return (
    <>
      <h1 className="text-5xl font-bold max-md:text-[24px]">Жанры фильмов</h1>
      <div className="py-16">
        <GenresBlock />
      </div>
    </>
  );
}
