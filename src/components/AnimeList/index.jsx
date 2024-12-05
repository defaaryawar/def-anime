import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4 px-4 pt-1 pb-10">
            {api.data?.map((anime) => {
                return (
                    <Link
                        key={anime.mal_id}
                        href={`/anime/${anime.mal_id}`}
                        className="cursor-pointer shadow-lg rounded-sm overflow-hidden bg-base-300 hover:bg-base-200 transition-all transform hover:scale-105 hover:shadow-xl hover:translate-y-2 duration-300 select-none hover:text-colorPrimarySaya"
                    >
                        {/* Gambar dengan efek zoom saat hover */}
                        <Image
                            src={anime.images.webp.image_url}
                            alt={anime.title}
                            width={350}
                            height={250}
                            className="w-full max-h-64 object-cover transition-transform duration-300"
                        />
                        {/* Judul Anime dengan efek hover */}
                        <h3 className="font-bold text-md md:text-xl px-4 pt-2 pb-4 transition-colors duration-100">
                            {anime.title}
                        </h3>
                    </Link>
                );
            })}
        </div>
    );
};


export default AnimeList;
