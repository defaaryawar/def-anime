import Link from "next/link";
import InputSearch from "./InputSearch.jsx";

const Navbar = () => {
    return (
        <header className="sticky-navbar sticky shadow-md outline-none bg-colorPrimarySaya">
            <div className="flex md:flex-row flex-col justify-between p-5 outline-none">
                {/* Kiri: Logo */}
                <Link 
                    href="/" 
                    className="font-bold text-2xl ml-4 outline-none pb-2 hover:text-opacity-80 transition-all duration-300 text-base-300"
                >
                    defAnime.
                </Link>

                {/* Input Search */}
                <InputSearch />
            </div>
        </header>
    );
};

export default Navbar;
