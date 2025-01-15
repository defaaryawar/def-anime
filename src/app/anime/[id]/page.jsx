import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";
import { FaStar, FaHeart, FaUsers, FaEye, FaClock, FaFilm } from "react-icons/fa";

const StatCard = ({ icon, label, value }) => {
  return (
    <div className="p-4 rounded-lg shadow-md w-40 border-2 border-purple-500 flex-shrink-0">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-sm font-semibold select-none">{label}</h3>
      </div>
      <p className="text-lg font-bold select-none">{value}</p>
    </div>
  );
};

const Page = async ({ params }) => {
  const { id } = await params;
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Judul dan Tahun Anime */}
      <div className="bg-transparent border-2 border-b-purple-600 text-purple-600 p-6 mb-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">{anime.data.title}</h1>
        <p className="text-xl opacity-90">{anime.data.year}</p>
      </div>

      {/* Statistik Anime */}
      <div className="overflow-x-auto scrollbar-hidden px-4 mb-12">
        <div className="flex gap-4">
          <StatCard
            icon={<FaStar className="text-yellow-400 text-xl" />}
            label="Rank"
            value={anime.data.rank}
          />
          <StatCard
            icon={<FaHeart className="text-red-500 text-xl" />}
            label="Score"
            value={anime.data.score}
          />
          <StatCard
            icon={<FaEye className="text-blue-500 text-xl" />}
            label="Popularity"
            value={anime.data.popularity}
          />
          <StatCard
            icon={<FaHeart className="text-red-500 text-xl" />}
            label="Favorites"
            value={anime.data.favorites}
          />
          <StatCard
            icon={<FaUsers className="text-green-500 text-xl" />}
            label="Members"
            value={anime.data.members}
          />
          <StatCard
            icon={<FaClock className="text-gray-500 text-xl" />}
            label="Duration"
            value={anime.data.duration}
          />
          <StatCard
            icon={<FaFilm className="text-purple-500 text-xl" />}
            label="Episodes"
            value={anime.data.episodes}
          />
        </div>
      </div>

      {/* Layout untuk Gambar dan Deskripsi */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-8 pb-16">
        {/* Gambar Anime */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <div className="relative group">
            <Image
              src={anime.data.images.webp.image_url}
              alt={anime.data.title}
              width={400}
              height={600}
              className="w-full h-auto rounded-lg object-cover shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-lg" />
          </div>
        </div>

        {/* Deskripsi Anime */}
        <div className="flex-1 text-lg mt-4 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Synopsis</h2>
          <p className="text-justify leading-relaxed opacity-80">{anime.data.synopsis}</p>

          {/* Rating */}
          <div className="flex items-center mt-6">
            <FaStar className="text-yellow-400 text-xl" />
            <p className="ml-2 text-lg font-bold">{anime.data.rating}</p>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="px-4 lg:px-8 pb-16">
        <VideoPlayer YoutubeId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Page;