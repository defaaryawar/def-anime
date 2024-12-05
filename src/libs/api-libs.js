export const getAnimeResponse = async (resource, query = "", retries = 3) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
        if (!response.ok) {
            throw new Error("API response tidak berhasil.");
        }
        return await response.json();
    } catch (error) {
        console.error(`Terjadi kesalahan saat mengambil data dari ${resource}: `, error);

        if (retries > 0) {
            console.log(`Mencoba lagi... Sisa percobaan: ${retries}`);
            // Menunggu 2 detik sebelum mencoba lagi
            await new Promise(resolve => setTimeout(resolve, 2000));
            return await getAnimeResponse(resource, query, retries - 1); // Coba lagi dengan sisa percobaan
        } else {
            console.error(`Gagal mengambil data setelah ${3 - retries + 1} percobaan.`);
            return null; // Kembalikan null jika gagal setelah 3 percobaan
        }
    }
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    try {
        const response = await getAnimeResponse(resource);
        if (!response) {
            throw new Error("Tidak ada data yang dapat diproses.");
        }
        return response.data.flatMap(item => item[objectProperty]);
    } catch (error) {
        console.error("Terjadi kesalahan saat memproses nested anime: ", error);
        return []; // Kembalikan array kosong jika terjadi error
    }
};

export const reproduce = (data, gap) => {
    try {
        if (!Array.isArray(data)) {
            throw new Error("Data yang diberikan bukan array.");
        }
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        const uniqueData = shuffled.filter((value, index, self) => 
            index === self.findIndex((t) => t.mal_id === value.mal_id)
        );
        const slicedData = uniqueData.slice(0, gap);
        return { data: slicedData };
    } catch (error) {
        console.error("Terjadi kesalahan saat melakukan reproduce: ", error);
        return { data: [] }; // Kembalikan array kosong jika terjadi error
    }
};
