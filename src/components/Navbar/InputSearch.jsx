"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();
    const [isValid, setIsValid] = useState(true); // Untuk menyimpan status validasi

    const handleSearch = (event) => {
        const keyword = searchRef.current.value.trim();
        
        // Jangan lakukan pencarian jika input kosong atau hanya spasi
        if (!keyword) return;

        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault();
            router.push(`/search/${keyword}`);
        }
    };

    // Validasi input agar tidak diawali dengan spasi
    const handleInputChange = () => {
        const keyword = searchRef.current.value;
        if (keyword.startsWith(" ")) {
            searchRef.current.value = ""; // Reset input jika diawali spasi
            setIsValid(false); // Menandakan input tidak valid
        } else {
            setIsValid(true); // Input valid jika tidak diawali spasi
        }
    };

    return (
        <div className="flex items-center join px-4 bg-transparent">
            <input
                className={`px-4 py-2 w-full rounded-md border ${isValid ? 'border-gray-300' : 'border-red-500'} focus:outline-none focus:ring-2 border-2 border-base-300 join-item transition-all duration-300 outline-none bg-base-300`}
                placeholder="Search"
                ref={searchRef}
                onKeyDown={handleSearch}
                onInput={handleInputChange} // Validasi input setiap ada perubahan
            />
            <button
                className="px-4 py-2  rounded-md join-item border-2 transition-all duration-300 font-bold"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default InputSearch;
