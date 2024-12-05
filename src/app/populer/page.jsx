"use client"

import React, { useEffect, useState } from 'react';
import HeaderMenu from '@/components/utilities/HeaderMenu';
import Pagination from '@/components/utilities/Pagination';
import AnimeList from '@/components/AnimeList';
import { getAnimeResponse } from '@/libs/api-libs';
import { Container } from '@mui/material';

const Page = () => {
    // Memperoleh nilai halaman dari sessionStorage jika ada, jika tidak maka default ke 1
    const [page, setPage] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedPage = sessionStorage.getItem('animePage');
            return savedPage ? parseInt(savedPage, 10) : 1;
        }
        return 1; // fallback default jika di server-side
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
            // Menyimpan nilai halaman ke sessionStorage setiap kali page berubah
            sessionStorage.setItem('animePage', page);
        }
    }, [page]);

    return (
        <Container maxWidth="2xl" className='text-center' sx={{ paddingTop: 4 }}>
            <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
            {loading ? (
                <span className="loading loading-infinity loading-lg text-colorPrimarySaya"></span>
            ) : (
                <>
                    <AnimeList api={topAnime} />
                    <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
                </>
            )}
        </Container>
    );
};

export default Page;
