import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const AnimeList = ({ api }) => {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-6 gap-4 px-7 pt-1 pb-10">
            {api.data?.map((anime) => (
                <Link
                    key={anime.mal_id}
                    href={`/anime/${anime.mal_id}`}
                    className="relative block bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                    <div className="relative">
                        <Image
                            src={anime.images.webp.image_url}
                            alt={anime.title}
                            width={250}
                            height={300}
                            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center space-x-1">
                            <Star className="h-4 w-4" />
                            <span className="text-sm font-semibold">{anime.score}</span>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-blue-600">
                            {anime.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-3">{anime.synopsis}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default AnimeList;