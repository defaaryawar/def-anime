import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");

  // Pastikan data tidak kosong
  if (!topAnime || !recommendedAnime) {
      return <div>Gagal memuat data...</div>;
  }

  recommendedAnime = reproduce(recommendedAnime, 5);

  return (
      <div>
          <section>
              <Header title="Paling Populer" LinkTitle="Lihat Semua" LinkHref="/populer" />
              <AnimeList api={topAnime} />
          </section>
          <section>
              <Header title="Rekomendasi" />
              <AnimeList api={recommendedAnime} />
          </section>
      </div>
  );
}

export default Page
