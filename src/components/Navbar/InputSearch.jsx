"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Search } from "lucide-react";

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();
    const [isValid, setIsValid] = useState(true);

    const handleSearch = (event) => {
        const keyword = searchRef.current.value.trim();

        if (!keyword) return;

        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault();
            router.push(`/search/${keyword}`);
        }
    };

    const handleInputChange = () => {
        const keyword = searchRef.current.value;
        if (keyword.startsWith(" ")) {
            searchRef.current.value = "";
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search anime, characters..."
                className={`w-80 px-4 py-2 rounded-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${!isValid && "border-red-500 focus:ring-red-500"
                    }`}
                ref={searchRef}
                onKeyDown={handleSearch}
                onInput={handleInputChange}
            />
            <button
                className="absolute right-0 top-0 bottom-0 px-4 rounded-r-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={handleSearch}
            >
                <Search className="h-6 w-6" />
            </button>
        </div>
    );
};

export default InputSearch;