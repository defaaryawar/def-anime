import { getAnimeResponse } from "@/libs/api-libs";
import ViedoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";
import { FaStar, FaHeart, FaUsers, FaEye, FaClock, FaFilm } from "react-icons/fa";

const StatCard = ({ icon, label, value }) => {
  return (
    <div className="p-4 rounded-lg shadow-md w-36 border-2 border-colorPrimarySaya flex-shrink-0">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <h3 className="text-sm font-semibold select-none">{label}</h3>
      </div>
      <p className="text-md font-bold select-none">{value}</p>
    </div>
  );
};

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <div className="bg-transparent min-h-screen">
      {/* Judul dan Tahun Anime */}
      <div className="p-4 mb-6 shadow-lg">
        <h1 className="text-xl font-semibold mb-2">{anime.data.title}</h1>
        <p className="text-lg opacity-80">{anime.data.year}</p>
      </div>

      {/* Statistik Anime (Rank, Score, Popularity, dll) */}
      <div className="overflow-x-auto scrollbar-hidden px-4 mb-12 py-1">
        <div className="flex gap-4">
          {/* Statistik Card - Peringkat */}
          <StatCard
            icon={<FaStar className="text-colorPrimarySaya text-lg" />}
            label="Peringkat"
            value={anime.data.rank}
          />
          {/* Statistik Card - Score */}
          <StatCard
            icon={<FaHeart className="text-colorPrimarySaya text-lg" />}
            label="Skor"
            value={anime.data.score}
          />
          {/* Statistik Card - Popularitas */}
          <StatCard
            icon={<FaEye className="text-colorPrimarySaya text-lg" />}
            label="Popularitas"
            value={anime.data.popularity}
          />
          {/* Statistik Card - Favorites */}
          <StatCard
            icon={<FaHeart className="text-colorPrimarySaya text-lg" />}
            label="Favorites"
            value={anime.data.favorites}
          />
          {/* Statistik Card - Members */}
          <StatCard
            icon={<FaUsers className="text-colorPrimarySaya text-lg" />}
            label="Anggota"
            value={anime.data.members}
          />
          {/* Statistik Card - Waktu */}
          <StatCard
            icon={<FaClock className="text-colorPrimarySaya text-lg" />}
            label="Durasi"
            value={anime.data.duration}
          />
          {/* Statistik Card - Episode */}
          <StatCard
            icon={<FaFilm className="text-colorPrimarySaya text-lg" />}
            label="Episode"
            value={anime.data.episodes}
          />
        </div>
      </div>

      {/* Layout untuk Gambar dan Deskripsi */}
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-8 pb-16">
        {/* Gambar Anime */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <div className="relative group">
            <Image
              src={anime.data.images.webp.image_url}
              alt={anime.data.title}
              width={350}
              height={250}
              className="w-full h-auto rounded-lg object-cover shadow-xl transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-300 rounded-lg" />
          </div>
        </div>

        {/* Deskripsi Anime */}
        <div className="flex-1 text-lg  mt-4 md:mt-0">
            <h1 className="text-xl mb-2 opacity-90">Synopsis</h1>
          <p className="text-justify leading-relaxed opacity-80">{anime.data.synopsis}</p>

          {/* Rating */}
          <div className="flex items-center mt-4">
            <FaStar className="text-colorPrimarySaya text-lg" />
            <p className="ml-2 text-md font-bold ">{anime.data.rating}</p>
          </div>
        </div>
      </div>
      <div>
        <ViedoPlayer YoutubeId={anime.data.trailer.youtube_id}/>
      </div>
    </div>
  );
};

export default Page;
