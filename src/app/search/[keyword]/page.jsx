"use client";

import { useState, useEffect } from 'react';
import { getAnimeResponse } from '@/libs/api-libs';
import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';
import Pagination from '@/components/utilities/Pagination';

const ITEMS_PER_PAGE = 20;

const Page = ({ params }) => {
    const { keyword } = params;
    const decodedKeyword = decodeURI(keyword);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchAnime, setSearchAnime] = useState(null);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const fetchAnime = async () => {
            const response = await getAnimeResponse(
                'anime',
                `q=${decodedKeyword}&page=${currentPage}&limit=${ITEMS_PER_PAGE}`
            );
            setSearchAnime(response);
            setTotalItems(response.pagination.items.total);
        };

        fetchAnime();
    }, [decodedKeyword, currentPage]);

    if (!searchAnime) {
        return <div>Loading...</div>;
    }

    const lastPage = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return (
        <section className="container mx-auto px-4 py-8">
            <Header title={`Search Results for "${decodedKeyword}"`} />
            <div className="mt-8">
                <AnimeList api={searchAnime} />
            </div>
            {totalItems > ITEMS_PER_PAGE && (
                <div className="mt-8">
                    <Pagination
                        page={currentPage}
                        lastPage={lastPage}
                        setPage={setCurrentPage}
                    />
                </div>
            )}
        </section>
    );
};

export default Page;