import MovieHero from "@/components/MovieHero/MovieHero";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <MovieHero id={params.id} />
    </>
  );
}
