import MovieHero from "@/components/MovieHero/MovieHero";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <>
      <MovieHero id={params.id} />

      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XcAX8jnJrFQ?si=PGZ1qxK1zvbjO2yu"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe> */}
    </>
  );
}
