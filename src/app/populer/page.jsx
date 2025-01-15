"use client";

import React, { useEffect, useState } from 'react';
import HeaderMenu from '@/components/utilities/HeaderMenu';
import Pagination from '@/components/utilities/Pagination';
import AnimeList from '@/components/AnimeList';
import { getAnimeResponse } from '@/libs/api-libs';
import { Container, Typography, CircularProgress } from '@mui/material';

const Page = () => {
    const [page, setPage] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedPage = sessionStorage.getItem('animePage');
            return savedPage ? parseInt(savedPage, 10) : 1;
        }
        return 1;
    });
    const [topAnime, setTopAnime] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
            setTopAnime(populerAnime);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('animePage', page);
        }
    }, [page]);

    return (
        <Container maxWidth="lg" className="py-8">
            <div className="text-center">
                <HeaderMenu title={`POPULAR ANIME #${page}`} />
                {loading ? (
                    <div className="flex justify-center mt-8">
                        <CircularProgress className="text-purple-500" />
                    </div>
                ) : (
                    <>
                        <Typography variant="h6" className="mt-8 mb-4 text-gray-600">
                            Discover the most popular anime series
                        </Typography>
                        <AnimeList api={topAnime} />
                        <Pagination
                            page={page}
                            lastPage={topAnime.pagination?.last_visible_page}
                            setPage={setPage}
                        />
                    </>
                )}
            </div>
        </Container>
    );
};

export default Page;